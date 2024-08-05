import { Button, Container, Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom";

const Root = (): JSX.Element => {
  return (
    <Container>
      <Typography>Welcome to the main app!</Typography>
      <Stack rowGap={2}>
        <Link to="/lifeCounter/1"><Button variant="contained">Go to Life Counter 1</Button></Link>
        <Link to="/lifeCounter/2"><Button variant="contained">Go to Life Counter 2</Button></Link>
      </Stack>
    </Container>
  )
}

export default Root;