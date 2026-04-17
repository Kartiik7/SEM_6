import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import { authenticateAndResolveRole } from '../services/api';
import { isLoggedIn, getStoredRole, saveAuthSession } from '../services/session';

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (isLoggedIn()) {
    const role = getStoredRole();
    return <Navigate to={role === 'ADMIN' ? '/admin' : '/user'} replace />;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    try {
      const authData = await authenticateAndResolveRole(username.trim(), password);

      saveAuthSession({
        user: authData.user,
        role: authData.role,
        token: authData.token
      });

      navigate(authData.role === 'ADMIN' ? '/admin' : '/user', { replace: true });
    } catch (requestError) {
      const status = requestError.response?.status;
      if (status === 401 || status === 403) {
        setError('Invalid username or password.');
      } else {
        setError('Cannot reach backend server. Start backend and try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" className="page-shell">
      <Card className="login-card" elevation={8}>
        <CardContent>
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            RBAC Login
          </Typography>
          <Typography variant="body2" sx={{ mb: 3 }}>
            Sign in with backend credentials to access user or admin dashboard.
          </Typography>

          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                fullWidth
              />

              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                fullWidth
              />

              <Button type="submit" variant="contained" disabled={loading} size="large">
                {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
              </Button>
            </Stack>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}

export default LoginPage;
