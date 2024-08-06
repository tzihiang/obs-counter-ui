import axios from "axios";
import { Paper, Grid, Typography } from "@mui/material";
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";

interface LifeCounterProps {
  id: number;
  color: string;
}

const LifeCounter = (props: LifeCounterProps): JSX.Element => {
  const [life, setLife] = useState(0);
  const { id, color } = props;
  const [ipAddress, setIpAddress] = useState('');

  // Fetch the IP address from the public file
  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        const response = await fetch('/ip_address.txt');
        const data = await response.text();
        setIpAddress(data.trim());
      } catch (error) {
        console.error("Error fetching IP address:", error);
      }
    };

    fetchIpAddress();
  }, []);

  useEffect(() => {
    const fetchLifeValue = async () => {
      if (!ipAddress) return; // Ensure IP address is available

      try {
        const response = await fetch(`http://${ipAddress}:5000/life/${id}`);
        const data = await response.json();
        setLife(data.value);
      } catch (error) {
        console.error("Error fetching life value:", error);
      }
    };

    fetchLifeValue();
  }, [id, ipAddress]); // Depend on ipAddress here

  const debouncedSetLifeValue = useMemo(
    () =>
      _.debounce(async (value: number) => {
        if (!ipAddress) return; // Ensure IP address is available

        try {
          await axios.post(`http://${ipAddress}:5000/life/${id}`, {
            value,
          });
        } catch (error) {
          console.error("Error updating life value:", error);
        }
      }, 300),
    [id, ipAddress] // Depend on ipAddress here
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
    debouncedSetLifeValue(life);
  }, [life, debouncedSetLifeValue]);

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
};

export default LifeCounter;
