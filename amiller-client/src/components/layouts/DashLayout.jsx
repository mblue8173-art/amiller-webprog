import { Link, useLocation, Outlet } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import ArticleIcon from '@mui/icons-material/Article';
import PeopleIcon from '@mui/icons-material/People';
import { useState } from 'react';

const drawerWidth = 260;

const menuItems = [
  { label: 'Overview', to: '/dashboard', icon: <DashboardIcon /> },
  { label: 'Articles', to: '/dashboard/articles', icon: <ArticleIcon /> },
  { label: 'Reports', to: '/dashboard/reports', icon: <BarChartIcon /> },
  { label: 'Users', to: '/dashboard/users', icon: <PeopleIcon /> },
];

const DashLayout = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const drawer = (
    <div>
      <Toolbar>
        <Box>
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Wireframe Studio
          </Typography>
        </Box>
      </Toolbar>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.to}
            component={Link}
            to={item.to}
            selected={location.pathname === item.to}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Wireframe Studio Dashboard
          </Typography>
          <Box>
            <Typography component="span" sx={{ mr: 2 }}>
              Search...
            </Typography>
            <Box component="button" sx={{ border: '1px solid white', borderRadius: 1, bgcolor: 'white', color: '#1976d2', px: 1.5, py: 0.5 }}>
              Logout
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{ display: { xs: 'block', sm: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{ display: { xs: 'none', sm: 'block' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashLayout;