import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import LifeCounter from "./components/LifeCounter";


function App() {

  const { data, isLoading } = useQuery({
    queryKey: ["ipAddress"],
    queryFn: async () => {
      try {
        const response = await fetch('http://localhost:5000/ip');
        const data = await response.json();
        return data.ip;
      } catch (error) {
        console.error('Error fetching IP:', error);
      }
    }
  })

  return (
    <Grid container sx={{ height: "300px" }}>
      <Grid item xs={6} >
        {isLoading || <LifeCounter color="#FF0000" id={1} ipAddress={data} />}
      </Grid>
      <Grid item xs={6}>
        {isLoading || <LifeCounter color="#0000FF" id={2} ipAddress={data} />}
      </Grid>
    </Grid>
  );
}

export default App;
