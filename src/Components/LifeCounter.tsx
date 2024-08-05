import axios from 'axios';
import { Paper, Grid, Typography } from "@mui/material";
import { useEffect, useState, useCallback } from "react";
import _ from 'lodash';


interface LifeCounterProps {
  ipAddress: string;
  id: number;
  color: string;
}

const LifeCounter = (props: LifeCounterProps): JSX.Element => {

  const [life, setLife] = useState(0);
  const { ipAddress, id, color } = props;

  const fetchLifeValue = async () => {
    try {
      const response = await axios.get(`http://${ipAddress}:5000/life/${id}`);
      setLife(response.data.value);
    } catch (error) {
      console.error('Error fetching life value:', error);
    }
  };

  const debouncedSetLifeValue = useCallback(
    _.debounce(async (value: number) => {
      try {
        await axios.post(`http://${ipAddress}:5000/life/${id}`, { value });
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
    fetchLifeValue();
  }, [id]);

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
