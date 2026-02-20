import React from 'react';
import RegistrationComponent from '../components/Registration';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Register() {
  return (
    <Box sx={{ py: 4 }}>
      <Container>
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4, fontWeight: 'bold', color: 'primary.main' }}>
          Registration
        </Typography>
      </Container>
      <RegistrationComponent />
    </Box>
  );
}

export default Register;
