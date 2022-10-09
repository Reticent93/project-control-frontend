import { Button, Container, Typography } from "@mui/material";
import Login from "../Login/Login";
import Sidebar from "../Sidebar/Sidebar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";


const Home = () => {


    return (
        <Box sx={{bgcolor: 'lightgrey', m: 0, maxWidth: 'auto' }}>
        <Sidebar />

        </Box>
    );
}


export default Home;