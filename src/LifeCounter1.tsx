import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getValue1, incrementValue1, decrementValue1 } from "./api";
import { IconButton, Grid, Paper, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const LifeCounter1 = (): JSX.Element => {
  const [life1, setLife1] = useState(0);

  const { error } = useQuery({
    queryKey: ["lifeTotal1"],
    queryFn: async () => {
      const result = await getValue1();
      setLife1(result);
    },
    refetchOnWindowFocus: false,
  });

  if (error) {
    console.log(error);
  }

  const handleIncrement = async (): Promise<void> => {
    setLife1((prev) => prev + 1);
    await incrementValue1();
  };

  const handleDecrement = async (): Promise<void> => {
    setLife1((prev) => prev - 1);
    await decrementValue1();
  };

  return (
    <Paper
      sx={{
        backgroundColor: "#6e102e",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        height: "100%",
      }}
    >
      <Grid container>
        <Grid item xs={3} display="flex" justifyContent="space-around">
          <IconButton onClick={handleIncrement} size="large">
            <AddIcon />
          </IconButton>
        </Grid>
        <Grid item xs={6} display="flex" justifyContent="center">
          <Typography variant="h4">{life1}</Typography>
        </Grid>
        <Grid item xs={3} display="flex" justifyContent="space-around">
          <IconButton onClick={handleDecrement} size="large">
            <RemoveIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default LifeCounter1;
