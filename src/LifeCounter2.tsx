import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getValue2, incrementValue2, decrementValue2 } from "./api";
import { IconButton, Grid, Paper, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const LifeCounter1 = (): JSX.Element => {
  const [life2, setLife2] = useState(0);

  const { error } = useQuery({
    queryKey: ["lifeTotal2"],
    queryFn: async () => {
      const result = await getValue2();
      setLife2(result);
    },
    refetchOnWindowFocus: false,
  });

  if (error) {
    console.log(error);
  }

  const handleIncrement = async (): Promise<void> => {
    setLife2((prev) => prev + 1);
    await incrementValue2();
  };

  const handleDecrement = async (): Promise<void> => {
    setLife2((prev) => prev - 1);
    await decrementValue2();
  };

  return (
    <Paper
      sx={{
        backgroundColor: "#00FF00",
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
          <Typography variant="h4">{life2}</Typography>
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
