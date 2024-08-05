import { Grid } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LifeCounter from "./components/LifeCounter";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Grid container sx={{ height: "300px" }}>
        <Grid item xs={6} >
          <LifeCounter color="#FF0000" id={1} />
        </Grid>
        <Grid item xs={6}>
          <LifeCounter color="#0000FF" id={2} />
        </Grid>
      </Grid>
    </QueryClientProvider>
  );
}

export default App;
