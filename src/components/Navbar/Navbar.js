import { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { createTheme, ThemeProvider, styled, alpha } from "@mui/material/styles";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import { InputBase, ListItem, AppBar, MenuItem } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import * as React from "react";


const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const Navbar = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#81e6d6',
            },

        }

    })

    const [value, setValue] = useState(0);

    return (
        <>
            <ThemeProvider theme={theme}>
                <Box sx={{bgcolor: '#e68191', display: 'flex', alignItems: 'center', p: 1}}>
                    <ListItem sx={{
                        width: 1,
                        justifyContent: 'flex-end',
                        alignItems: 'center'
                    }}>
                        <Box sx={{flexGrow: 1, display: 'flex', flexDirection: 'flex-end'}}>
                                <Toolbar>
                                    <Search>
                                        <SearchIconWrapper sx={{color: 'white'}}>
                                            <SearchIcon color={'primary'} />
                                        </SearchIconWrapper>
                                        <StyledInputBase
                                            placeholder="Search…"
                                            inputProps={{'aria-label': 'search'}}
                                        />
                                    </Search>
                                    <Box sx={{flexGrow: 1}}/>
                                </Toolbar>
                        </Box>
                    </ListItem>
                    <MenuItem sx={{width: 50, alignItems: 'center'}}>
                        <NotificationsNoneOutlinedIcon color={"primary"}/>
                    </MenuItem>
                    <MenuItem sx={{width: 50, alignItems: 'center'}}>
                        <AddCardOutlinedIcon color={"primary"}/>
                    </MenuItem>
                    <MenuItem sx={{width: 50, alignItems: 'center'}}>
                        <ModeCommentOutlinedIcon color={"primary"}/>
                    </MenuItem>
                    <MenuItem sx={{width: 50, alignItems: 'center'}}>
                        <AccountCircleOutlinedIcon color={"primary"}/>
                    </MenuItem>
                </Box>
            </ThemeProvider>
        </>
    );
}


export default Navbar;