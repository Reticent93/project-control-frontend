import { Button, Container, List, Typography } from "@mui/material";
import Login from "../Login/Login";
import Sidebar from "../Sidebar/Sidebar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Widget from "../Widget/Widget";


const Home = () => {


    return (
        <>
        <Sidebar/>
        <Box sx={{bgcolor: 'lightgrey', m: 0,  }}>

            <Box sx={{display: 'flex', width: "auto"}}>
                <Widget/>
                <Widget/>
                <Widget/>
                <Widget/>
            </Box>
        </Box>
            </>
    )
        ;
}


export default Home;