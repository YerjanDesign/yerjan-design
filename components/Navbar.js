import Link from "next/link";
import { useRouter } from "next/router";


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { Drawer, List, ListItem, ListItemText, ListItemButton } from "@mui/material";
import { motion } from "framer-motion";


const Navbar = () => {
    const [state, setState] = useState(false)
    const router = useRouter();

    const links = [{ name: 'about', path: '/' }, { name: 'projects', path: '/projects' }, { name: 'contact', path: '/contact' }]

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState(open);
    };

    const list = () => (
        <Box
            display='flex'
            alignItems='center'
            borderRadius="5px"
            bgcolor='#151515'
            margin='5px 5px 5px 0'
            sx={{ width: "250px", flexGrow: 1 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List sx={{ flexGrow: 1 }} >
                {
                    links.map((link) => (
                        <ListItem disablePadding key={link.name}>
                            <ListItemButton onClick={() => router.push(link.path)}>
                                <ListItemText sx={{ textAlign: 'center' }}>
                                    <a className={router.pathname === link.path ? "active" : ""}>{link.name}</a>
                                </ListItemText>
                            </ListItemButton >
                        </ListItem >
                    ))
                }
            </List >
        </Box >
    );

    return <Box width="auto" height='69px' position="fixed" right={0} left={0} top="0" margin='5px' borderRadius='5px' zIndex={5}>
        <AppBar position="sticky" sx={{ top: '5px', width: 'auto', height: '64px' }}>
            <Toolbar sx={{ height: '64px' }}>
                <Box sx={{ flexGrow: 1, display: 'flex' }}>
                    <motion.div whileHover={{ textShadow: "0px 0px 5px #fff" }}>
                        <Link href='/'><a style={{ display: 'flex', alignItems: 'center' }}>
                            <Box display='flex' sx={{ alignItems: 'center', width: { xs: '40px', md: '46px' } }}>
                                <motion.div
                                    style={{ display: 'flex', alignItems: 'center' }}
                                    initial={router.pathname == "/" ? { scale: 8, x: '47vw', y: '40vh', rotate: -360 } : {}}
                                    animate={{ scale: 1, x: 0, y: 0, rotate: 0 }}
                                    transition={{ delay: 1, duration: 1 }}
                                >
                                    <img src='/yerjan-logo.png' style={{ maxWidth: '100%' }} />
                                </motion.div>
                            </Box>
                            <motion.div
                                initial={router.pathname == "/" ? { opacity: 0 } : {}}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 2, duration: 1 }}
                            >
                                <Typography variant='h1' color='secondary' component="div" sx={{ fontFamily: 'azonix', ml: { xs: 1, md: 2 }, mt: 1, fontSize: { xs: '20px', md: "25px" } }}>
                                    YERJAN DESIGN
                                </Typography>
                            </motion.div>
                        </a>
                        </Link>

                    </motion.div>
                </Box>

                <Box sx={{ alignItems: 'center', gap: '20px', display: { xs: 'none', md: 'flex' } }}>

                    {links.map((link) => (
                        <motion.div key={link.name}
                            whileHover={{ scale: 1.2, textShadow: "0px 0px 3px #fff" }} >
                            <Link href={link.path}>
                                <a className={router.pathname === link.path ? "active" : ""}>
                                    {link.name}
                                </a>
                            </Link>
                        </motion.div>

                    ))}
                </Box>

                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ display: { xs: 'block', md: 'none' } }}
                    onClick={toggleDrawer(true)}>
                    <MenuIcon />
                </IconButton>
                <Drawer
                    elevation={0}
                    anchor='right'
                    open={state}
                    onClose={toggleDrawer(false)}
                >
                    {list()}
                </Drawer>

            </Toolbar>
        </AppBar >
    </Box >
}

export default Navbar;