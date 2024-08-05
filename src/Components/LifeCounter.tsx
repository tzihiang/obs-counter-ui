import axios from 'axios';
import { Paper, Grid, Typography } from "@mui/material";
import { useEffect, useState, useMemo } from "react";
import _ from 'lodash';

interface LifeCounterProps {
  id: number;
  color: string;
}

const LifeCounter = (props: LifeCounterProps): JSX.Element => {
  const [life, setLife] = useState(0);
  const [ip, setIp] = useState<string>("");
  const { id, color } = props;

  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        const response = await fetch('http://localhost:5000/ip');
        const data = await response.json();
        setIp(data.ip);
        return data.ip;
      } catch (error) {
        console.error('Error fetching IP:', error);
        throw error;
      }
    };

    const fetchLifeValue = async (ipAddress: string) => {
      try {
        const response = await fetch(`http://${ipAddress}:5000/life/${id}`);
        const data = await response.json()
        setLife(data.value);
      } catch (error) {
        console.error('Error fetching life value:', error);
      }
    };

    const initialize = async () => {
      try {
        const ipAddress = await fetchIpAddress();
        await fetchLifeValue(ipAddress);
      } catch (error) {
        console.error('Initialization error:', error);
      }
    };

    initialize();
  }, [id]);

  const debouncedSetLifeValue = useMemo(() =>
    _.debounce(async (value: number) => {
      try {
        await axios.post(`http://${ip}:5000/life/${id}`, { value });
      } catch (error) {
        console.error('Error updating life value:', error);
      }
    }, 300),
    [id, ip]
  );

  const incrementHandler = () => {
    setLife((prev) => prev + 1);
  };

  const decrementHandler = () => {
    setLife((prev) => prev - 1);
  };

  useEffect(() => {
    return () => {
      debouncedSetLifeValue.cancel();
    };
  }, [debouncedSetLifeValue]);

  useEffect(() => {
    if (ip) {
      debouncedSetLifeValue(life);
    }
  }, [life, debouncedSetLifeValue, ip]);

  return (
    <Paper
      sx={{
        backgroundColor: color,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        height: "100%",
      }}
    >
      <Grid container>
        <Grid
          item
          xs={3}
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          onClick={incrementHandler}
        >
          <Typography variant="h2">+</Typography>
        </Grid>
        <Grid item xs={6} display="flex" justifyContent="center">
          <Typography variant="h1">{life}</Typography>
        </Grid>
        <Grid
          item
          xs={3}
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          onClick={decrementHandler}
        >
          <Typography variant="h2">-</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default LifeCounter;
