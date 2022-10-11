import { PureComponent } from "react";
import { Box, Card, CircularProgress, List, ListItem, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Grid2 from "@mui/material/Unstable_Grid2";


const Featured = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#909090'
            }
        }
    })


    return (
        <ThemeProvider theme={theme}>
            <Card sx={{
                p: 2,
                gap: '20px',
                justifyContent: 'space-between',
                flex: 3,
                m: 2,
                boxShadow: '10px 10px 10px 10px lightgrey',
                borderRadius: '10px',
                height: 'auto',
                bgcolor: '#194775',

            }}>
                <Box sx={{display: 'flex',justifyContent: 'space-between', alignItems: 'center',}}>
                    <Typography variant={'h6'} color={'primary'}>Total Sales</Typography>
                    <MoreVertIcon color={'primary'}/>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center', gap: '15px', p:2, }}>
                    <Grid2 container spacing={2} sx={{width: '150px', height: '150px'}}>
                    <CircularProgressbar value={70} text={'70%'} strokeWidth={3}/>
                    </Grid2>
                    <Typography variant={'h6'} color={'primary'}>Total sales made today</Typography>
                    <Typography variant={'h3'} color={'primary'}>$1,960</Typography>
                </Box>
                <ListItem sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                    <Typography variant={'h6'} color={'primary'}>Target</Typography>
                    <Typography variant={'h6'} color={'primary'}>$2,800</Typography>
                </ListItem>
            </Card>
        </ThemeProvider>
    );
}


export default Featured;