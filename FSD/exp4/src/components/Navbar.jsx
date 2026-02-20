import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useAppContext } from '../context/AppContext';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = (props) => {
  const { state } = useAppContext();
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Events', path: '/events' },
    { label: 'Schedule', path: '/schedule' },
    { label: 'Speakers', path: '/speakers' },
    { label: 'Register', path: '/register' },
    { label: 'My Schedule', path: '/my-schedule', badge: state.bookmarks.length },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        College Fest 2026
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton 
              component={NavLink} 
              to={item.path} 
              sx={{ textAlign: 'center', '&.active': { color: 'primary.main', bgcolor: 'action.selected' } }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar position="sticky" elevation={0} sx={{ bgcolor: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)', color: 'text.primary', borderBottom: '1px solid', borderColor: 'divider' }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, fontWeight: 'bold', color: 'primary.main' }}
            >
              College Fest 2026
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                  <Button 
                     key={item.label} 
                     component={NavLink}
                     to={item.path}
                     sx={{ 
                       color: 'text.primary', 
                       textTransform: 'none',
                       fontSize: '1rem',
                       fontWeight: 500,
                       mx: 1,
                       '&:hover': { color: 'primary.main', bgcolor: 'transparent' },
                       '&.active': { color: 'primary.main', fontWeight: 'bold', borderBottom: '2px solid' }
                     }}
                  >
                    {item.badge > 0 ? (
                      <Badge badgeContent={item.badge} color="secondary">
                        {item.label}
                      </Badge>
                    ) : (
                      item.label
                    )}
                  </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;
