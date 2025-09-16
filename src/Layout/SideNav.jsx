import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Navbar from './Navbar';
import DrawerL from './DrawerL'

const drawerWidth = 240;


const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    overflowY: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        zIndex:'1000',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function SideNav() {
    const [open, setOpen] = React.useState(false);
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleMobileDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const drawer = (
        <DrawerL open={open} />
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <Navbar mobileOpen={mobileOpen}
                handleMobileDrawerToggle={handleMobileDrawerToggle} open={open} />

            {/* Desktop drawer */}
            <Drawer
                open={open}
                variant="permanent"
                onMouseEnter={handleDrawerOpen}
                onMouseLeave={handleDrawerClose}
                sx={{
                    display: { xs: 'none', md: 'block' }
                }}
            >
                <DrawerHeader sx={{ marginBottom: '100px' }}>
                   
                </DrawerHeader>
                {drawer}
            </Drawer>

            {/* Mobile drawer */}
            <MuiDrawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleMobileDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <DrawerHeader>
                    
                </DrawerHeader>
                <Divider />
                {drawer}
            </MuiDrawer>
        </Box>
    );
}