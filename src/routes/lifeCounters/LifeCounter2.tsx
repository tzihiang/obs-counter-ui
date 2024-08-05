import { Container, Grid } from "@mui/material"
import LifeCounter from "../../components/LifeCounter";

const LifeCounter2 = (): JSX.Element => {
    return (
        <Container>
            <Grid container sx={{ height: "300px" }}>
                <Grid item xs={6} >
                    <LifeCounter color="#FF0000" id={3} />
                </Grid>
                <Grid item xs={6}>
                    <LifeCounter color="#0000FF" id={4} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default LifeCounter2;