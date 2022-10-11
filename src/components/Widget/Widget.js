import { Button, Card, Grid, Link, Paper, TextField, Box, Container, List, ListItem, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";


const Widget = () => {
    const theme = createTheme({
        palette: {
            main: green[400]
        },
        spacing: 8,
        display: 'flex',
    })

    return (
        <ThemeProvider theme={theme}>
            <Card sx={{
                display: 'flex',
                p: 2,
                gap: '20px',
                justifyContent: 'space-between',
                flexGrow: 6,
                m: 2,
                boxShadow: '10px 10px 10px 10px lightgrey',
                borderRadius: '10px',
                height: '150px'
            }}>
                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                    <Typography variant={'h6'} sx={{color: '#78909c'}} >Orders</Typography>
                    <Typography variant={'h4'}>32</Typography>
                    <Typography  sx={{borderBottom: '1px solid black'}}>See all orders</Typography>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <KeyboardArrowUpIcon/>
                    <AssignmentTurnedInOutlinedIcon  color={'primary'}/>
                </Box>

            </Card>

        </ThemeProvider>
    );
}


export default Widget;