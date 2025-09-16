import { Box } from "@mui/material";
import React from "react";
import { styled, alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import Notifications from '../Components/Notifications';
import AccountMenu from '../Components/AccountMenu'
import IconButton from '@mui/material/IconButton';
import Messages from '../Components/Messages';
import InputBase from '@mui/material/InputBase';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { ColorModeContext } from '../Components/CustomThemeProvider'
import Zoom from '@mui/material/Zoom';



const Search = styled('div')(({ theme }) => ({
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

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
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


// Modified AppBar to always be full width
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
    zIndex: theme.zIndex.drawer - 1,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    width: '100%',
    [theme.breakpoints.up('lg')]: {
        width: 'calc(100% - 65px)',
    },
    transition: theme.transitions.create(['margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
     marginBottom: theme.mixins.toolbar.minHeight,
}));


const Navbar = ({ mobileOpen, handleMobileDrawerToggle }) => {
    const theme = useTheme();
    const { toggleColorMode, mode } = React.useContext(ColorModeContext);


    return (
        <>
            <AppBar position="fixed" elevation={0}>
                <Toolbar sx={{ paddingLeft: { xs: 1, md: 2 } }}>

                    {/* Mobile menu button - show when mobile drawer is closed */}
                    {!mobileOpen && (
                        <IconButton
                            color="inherit"
                            aria-label="open mobile drawer"
                            edge="start"
                            onClick={handleMobileDrawerToggle}
                            sx={{
                                marginRight: 2,
                                display: { xs: 'flex', md: 'none' }
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}

                    {/* Mobile drawer close button - show when mobile drawer is open */}
                    {mobileOpen && (
                        <IconButton
                            color="inherit"
                            aria-label="close mobile drawer"
                            edge="start"
                            onClick={handleMobileDrawerToggle}
                            sx={{
                                marginRight: 2,
                                display: { xs: 'flex', md: 'none', position: 'absolute', top: '100%', left: '225px' }
                            }}
                        >
                            <Zoom in={mobileOpen} style={{ transitionDelay: mobileOpen ? '100ms' : '0ms' }}>
                                <Box sx={{ borderRadius: '50%', backgroundColor: theme.palette.background.default, display: 'flex', alignItems: 'center', border: '0.01px solid gray', padding: '3px' }}>
                                    <MenuIcon />
                                </Box>
                            </Zoom>
                        </IconButton>
                    )}


                    <Box sx={{ marginLeft: { lg: '30%' }, width: '500px' }}>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
                        <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
                            {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                        </IconButton>

                        <Messages />
                        <Notifications />
                        <AccountMenu />
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
}
export default Navbar;