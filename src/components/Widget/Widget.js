import { Button, Card, Grid, Link, Paper, TextField, Box, Container, List, ListItem, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';





const Widget = ({type}) => {
    const theme = createTheme({
        palette: {
            main: green[400]
        },
        spacing: 8,
        display: 'flex',
    })

    let data;

    //temporarily hard coded data
    const amount = 100;


    switch (type) {
        case 'invoices':
            data = {
                title: 'Invoices',
                isMoney: false,
                link: 'view all invoices',
                icon: <RequestQuoteOutlinedIcon />,
            };
            break;
        case 'orders':
            data = {
                title: 'Orders',
                isMoney: false,
                link: 'view all orders',
                icon: <AssignmentTurnedInOutlinedIcon />,
            };
            break;
        case 'inventory':
            data = {
                title: 'Inventory',
                isMoney: false,
                link: 'view all inventory',
                icon: <Inventory2OutlinedIcon/>,
            };
            break;
        case 'suppliers':
            data = {
                title: 'Suppliers',
                isMoney: false,
                link: 'view all suppliers',
                icon: <PrecisionManufacturingIcon/>,

            };
            break;
            default:
                break;
    }

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
                height: '160px',
                bgcolor: '#194775',
            }}>
                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                    <Typography variant={'h6'} sx={{color: '#909090'}} >{data.title}</Typography>
                    <Typography variant={'h4'} sx={{color: '#909090', }}>{data.isMoney && '$'} {amount}</Typography>
                    <Typography  sx={{borderBottom: '1px solid #909090', color: '#909090'}}>{data.link}</Typography>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column-reverse', justifyContent: 'space-between', color: '#909090' }}>
                    {/*<KeyboardArrowUpIcon sx={{color: '#81e6d6'}}/>*/}
                    <Typography variant={'h6'} sx={{color: '#81e6d6'}}>{data.icon}</Typography>

                </Box>

            </Card>

        </ThemeProvider>
    );
}


export default Widget;