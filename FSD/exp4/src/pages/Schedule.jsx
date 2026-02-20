import React from 'react';
import ScheduleComponent from '../components/Schedule';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Schedule() {
  return (
    <Box sx={{ py: 4 }}>
      <Container>
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4, fontWeight: 'bold', color: 'primary.main' }}>
          Event Schedule & Speakers
        </Typography>
      </Container>
      <ScheduleComponent />
    </Box>
  );
}

export default Schedule;
