import { Button, Container, Grid, List, Typography } from "@mui/material";
import Login from "../Login/Login";
import Sidebar from "../Sidebar/Sidebar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Widget from "../Widget/Widget";


const Home = () => {


    return (

        <Container disableGutters maxWidth={'false'} sx={{display: 'flex', height: '100vh', margin: 0}}>
            <Sidebar maxWidth={'sm'} sx={{}}/>
            <Grid sx={{flex: 8}} >
                <Box sx={{display: 'flex'}}>
                    <Widget/>
                    <Widget/>
                    <Widget/>
                    <Widget/>
                </Box>
            </Grid>
        </Container>

    )
        ;
}


export default Home;