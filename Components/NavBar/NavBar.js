import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Link from 'next/link';


const NavBar = () => {


    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };



   

    return (
        <AppBar style={{ top:'20px',width:'90%',right:'0',left:'0',margin:'0 auto' ,borderRadius:'12px'}} position="fixed">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        GMHS Admin Panel
            </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <Link href='/notices'>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">Notices</Typography>
                                </MenuItem>
                            </Link>

                            <Link href='/news'>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">News</Typography>
                                </MenuItem>
                            </Link>




                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        GMHS Admin Panel
            </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                        <Link href='/news'>
                            <Button

                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                    News
                            </Button>
                        </Link>
                        <Link href='/notices'>
                            <Button

                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                    Notices
                            </Button>
                        </Link>


                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Menu">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <MoreVertIcon color='secondary' />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <Link href='/'>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">Logout</Typography>
                                </MenuItem>
                            </Link>
                            <Link href='/'>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">Add Admin</Typography>
                                </MenuItem>
                            </Link>

                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>

    );
};

export default NavBar;