import { Container, Divider, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import ToggleColorMode from "../Darkmode/DarkMode";
import Box from "@mui/material/Box";
import  HomeOutlined  from '@mui/icons-material/HomeOutlined';
import AddchartOutlinedIcon from '@mui/icons-material/AddchartOutlined';
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import { green } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Grid2 from "@mui/material/Unstable_Grid2";


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
        <Grid  sx={{ padding: '0px',bgcolor: '#194775', color: '#909090', width: '250px',
            '& .MuiListItemButton-root:hover': {
                bgcolor: '#606060',
                '&, & .MuiListItemIcon-root': {
                    color: 'white',
                },
            }}}>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon  >
                                <HomeOutlined color={'primary'}  />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <AddchartOutlinedIcon color={'primary'}/>
                            </ListItemIcon>
                            <ListItemText primary="Request" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                            <RequestQuoteOutlinedIcon color={'primary'}/>
                            </ListItemIcon>
                            <ListItemText primary="Invoices" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemIcon>
                                <AssignmentTurnedInOutlinedIcon color={'primary'}/>
                            </ListItemIcon>
                            <ListItemText primary="Orders" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemIcon>
                                <Inventory2OutlinedIcon color={'primary'} />
                            </ListItemIcon>
                            <ListItemText primary="Inventory" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemIcon>
                                <PrecisionManufacturingIcon color={'primary'} />
                            </ListItemIcon>
                            <ListItemText primary="Supplier" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemIcon>
                                <PaymentOutlinedIcon color={'primary'}/>
                            </ListItemIcon>
                            <ListItemText primary="Pay" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemIcon>
                                <PeopleAltOutlinedIcon color={'primary'}/>
                            </ListItemIcon>
                            <ListItemText primary="Employee" />
                        </ListItemButton>
                    </ListItem>

        </Grid>
        </ThemeProvider>
    );
}


export default Sidebar;