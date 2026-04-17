import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AppNavbar from '../components/AppNavbar';
import { fetchUserProfile } from '../services/api';
import { clearAuthSession } from '../services/session';

function UserDashboard() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const loadProfile = useCallback(async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetchUserProfile();
      setData(response.data);
    } catch (requestError) {
      const status = requestError.response?.status;
      if (status === 401 || status === 403) {
        clearAuthSession();
        navigate('/', { replace: true });
        return;
      } else {
        setError('Failed to load user profile from backend.');
      }
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  useEffect(() => {
    loadProfile();
  }, [loadProfile]);

  return (
    <>
      <AppNavbar />
      <Container maxWidth="md" className="page-shell">
        <Card elevation={6}>
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              User Dashboard
            </Typography>

            {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

            {loading && <Typography>Loading user data...</Typography>}

            {!loading && data && (
              <Stack spacing={1}>
                <Typography><strong>Message:</strong> {data.message}</Typography>
                <Typography><strong>Username:</strong> {data.username}</Typography>
              </Stack>
            )}

            <Button variant="outlined" sx={{ mt: 3 }} onClick={loadProfile}>
              Refresh Profile
            </Button>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

export default UserDashboard;
