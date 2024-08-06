import { Container, Grid } from "@mui/material"
import LifeCounter from "../../components/LifeCounter";

const LifeCounter2 = (): JSX.Element => {
    return (
        <Container>
            <Grid container sx={{ height: "300px" }}>
                <Grid item xs={6} >
                    <LifeCounter color="#BA8A43" id={3} />
                </Grid>
                <Grid item xs={6}>
                    <LifeCounter color="#4C82A9" id={4} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default LifeCounter2;