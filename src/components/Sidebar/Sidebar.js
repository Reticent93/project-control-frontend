import {Link as RouterLink} from 'react-router-dom';
import Link from '@mui/material/Link';
import {Container, Divider, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import ToggleColorMode from "../Darkmode/DarkMode";
import HomeOutlined from '@mui/icons-material/HomeOutlined';
import AddchartOutlinedIcon from '@mui/icons-material/AddchartOutlined';
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import {createTheme, ThemeProvider} from "@mui/material/styles";


const Sidebar = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#81e6d6',
                mode: 'dark',
            },
        },
    })

    return (
        <ThemeProvider theme={theme}>
            <Grid sx={{
                padding: '0px', bgcolor: '#194775', color: '#909090', width: '250px',
                '& .MuiListItemButton-root:hover': {
                    bgcolor: '#606060',
                    '&, & .MuiListItemIcon-root': {
                        color: 'white',
                    },
                }
            }}>

                <Link component={RouterLink} to='/' sx={{textDecoration: 'none', color: '#909090'}}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <HomeOutlined color={'primary'}/>
                            </ListItemIcon>
                            <ListItemText primary="Dashboard"/>
                        </ListItemButton>
                    </ListItem>
                </Link>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <AddchartOutlinedIcon color={'primary'}/>
                        </ListItemIcon>
                        <ListItemText primary="Request"/>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <RequestQuoteOutlinedIcon color={'primary'}/>
                        </ListItemIcon>
                        <ListItemText primary="Invoices"/>
                    </ListItemButton>
                </ListItem>
                        <Link component={RouterLink} to='/orders' sx={{textDecoration: 'none', color: '#909090'}}>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <AssignmentTurnedInOutlinedIcon color={'primary'}/>
                        </ListItemIcon>
                            <ListItemText primary="Orders"/>
                    </ListItemButton>
                </ListItem>
                        </Link>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <Inventory2OutlinedIcon color={'primary'}/>
                        </ListItemIcon>
                        <ListItemText primary="Inventory"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <PrecisionManufacturingIcon color={'primary'}/>
                        </ListItemIcon>
                        <ListItemText primary="Supplier"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <PaymentOutlinedIcon color={'primary'}/>
                        </ListItemIcon>
                        <ListItemText primary="Pay"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <PeopleAltOutlinedIcon color={'primary'}/>
                        </ListItemIcon>
                        <ListItemText primary="Employee"/>
                    </ListItemButton>
                </ListItem>

            </Grid>
        </ThemeProvider>
    );
}


export default Sidebar;