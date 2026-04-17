import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { clearAuthSession, getStoredRole, getStoredUser } from '../services/session';

function AppNavbar() {
  const navigate = useNavigate();
  const role = getStoredRole();
  const user = getStoredUser();

  const handleLogout = () => {
    clearAuthSession();
    navigate('/', { replace: true });
  };

  return (
    <AppBar position="static" color="transparent" elevation={0} className="glass-nav">
      <Toolbar className="d-flex justify-content-between">
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          RBAC Frontend
        </Typography>

        <Box className="d-flex align-items-center gap-2">
          {role === 'USER' && (
            <Button variant="outlined" onClick={() => navigate('/user')}>
              User Dashboard
            </Button>
          )}

          {role === 'ADMIN' && (
            <Button variant="outlined" onClick={() => navigate('/admin')}>
              Admin Dashboard
            </Button>
          )}

          <Typography variant="body2" sx={{ mr: 1 }}>
            {user} ({role})
          </Typography>

          <Button variant="contained" color="error" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default AppNavbar;
