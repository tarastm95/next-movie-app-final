"use client";

import React from 'react';
import Link from 'next/link';
import SearchBar from '@/app/components/SearchBar';
import UserInfo from '@/app/components/UserInfo';
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Drawer, List, ListItem, ListItemText, Divider, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ThemeSwitcher from "@/app/components/ThemeSwitcher";

const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => setOpen(true);
    const handleDrawerClose = () => setOpen(false);

    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: '#3f51b5' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {isMobile && (
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleDrawerOpen}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link href="/" passHref>
                            <Button sx={{ color: isMobile ? 'inherit' : 'white' }}>Main Page</Button>
                        </Link>
                        <Link href="/genres" passHref>
                            <Button sx={{ color: isMobile ? 'inherit' : 'white' }}>Genres</Button>
                        </Link>
                    </Typography>
                    {!isMobile && (
                        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                            <SearchBar />
                            <UserInfo />
                            <ThemeSwitcher/>
                        </Box>
                    )}
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="left"
                open={open}
                onClose={handleDrawerClose}
                sx={{ display: { xs: 'block', md: 'none' }, backgroundColor: '#3f51b5' }}
            >
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={handleDrawerClose}
                    onKeyDown={handleDrawerClose}
                >
                    <List>
                        <ListItem button>
                            <Link href="/" passHref>
                                <ListItemText primary="Головна сторінка" sx={{ color: '#3F51B5' }} />
                            </Link>
                        </ListItem>
                        <ListItem button>
                            <Link href="/genres" passHref>
                                <ListItemText primary="Genres" sx={{ color: '#3F51B5' }} />
                            </Link>
                        </ListItem>
                    </List>
                    <Divider />
                    <Box sx={{ padding: 2 }}>
                        <SearchBar />
                    </Box>
                </Box>
            </Drawer>
        </>
    );
};

export default Header;
