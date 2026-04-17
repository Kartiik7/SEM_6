import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import AppNavbar from '../components/AppNavbar';
import { fetchAdminDashboard, fetchUserProfile } from '../services/api';
import { clearAuthSession } from '../services/session';

function AdminDashboard() {
  const navigate = useNavigate();
  const [adminData, setAdminData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const loadDashboard = useCallback(async () => {
    setLoading(true);
    setError('');

    try {
      const [adminResponse, userResponse] = await Promise.all([
        fetchAdminDashboard(),
        fetchUserProfile()
      ]);

      setAdminData(adminResponse.data);
      setUserData(userResponse.data);
    } catch (requestError) {
      const status = requestError.response?.status;
      if (status === 401 || status === 403) {
        clearAuthSession();
        navigate('/', { replace: true });
        return;
      } else {
        setError('Failed to load admin dashboard from backend.');
      }
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  useEffect(() => {
    loadDashboard();
  }, [loadDashboard]);

  return (
    <>
      <AppNavbar />
      <Container maxWidth="md" className="page-shell">
        <Card elevation={6}>
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              Admin Dashboard
            </Typography>

            {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
            {loading && <Typography>Loading admin data...</Typography>}

            {!loading && adminData && (
              <Stack spacing={1} sx={{ mb: 2 }}>
                <Typography><strong>Admin Message:</strong> {adminData.message}</Typography>
                <Typography><strong>Admin Username:</strong> {adminData.username}</Typography>
              </Stack>
            )}

            {!loading && userData && (
              <>
                <Divider sx={{ my: 2 }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                  User Endpoint Access (Admin can view all controls)
                </Typography>
                <Stack spacing={1}>
                  <Typography><strong>User Message:</strong> {userData.message}</Typography>
                  <Typography><strong>User Username:</strong> {userData.username}</Typography>
                </Stack>
              </>
            )}

            <Button variant="outlined" sx={{ mt: 3 }} onClick={loadDashboard}>
              Refresh Dashboard
            </Button>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

export default AdminDashboard;
