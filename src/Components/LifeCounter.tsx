import axios from 'axios';
import { Paper, Grid, Typography } from "@mui/material";
import { useEffect, useState, useMemo } from "react";
import _ from 'lodash';
import { LOCALHOST_SERVER, LOCALHOST_API_SERVER_PORT } from "../config";


interface LifeCounterProps {
  id: number;
  color: string;
}

const LifeCounter = (props: LifeCounterProps): JSX.Element => {

  const [life, setLife] = useState(0);
  const { id, color } = props;

  useEffect(() => {
    const fetchLifeValue = async () => {
      try {
        const response = await axios.get(`http://${LOCALHOST_SERVER}:${LOCALHOST_API_SERVER_PORT}/life/${id}`);
        setLife(response.data.value);
      } catch (error) {
        console.error('Error fetching life value:', error);
      }
    };

    fetchLifeValue();
  }, [id]);

  const debouncedSetLifeValue = useMemo(() =>
    _.debounce(async (value: number) => {
      try {
        await axios.post(`http://${LOCALHOST_SERVER}:${LOCALHOST_API_SERVER_PORT}/life/${id}`, { value });
      } catch (error) {
        console.error('Error updating life value:', error);
      }
    }, 300),
    [id]
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
}

export default LifeCounter;
