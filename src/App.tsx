import { Grid } from "@mui/material";
import LifeCounter1 from "./LifeCounter1";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LifeCounter2 from "./LifeCounter2";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Grid container>
        <Grid item xs={6} sx={{ height: "300px" }}>
          <LifeCounter1 />
        </Grid>
        <Grid item xs={6}>
          <LifeCounter2 />
        </Grid>
      </Grid>
    </QueryClientProvider>
  );
}

export default App;
