import React from 'react';
import EventsComponent from '../components/Events';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Events() {
  return (
    <Box sx={{ py: 4 }}>
       <Container>
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4, fontWeight: 'bold', color: 'primary.main' }}>
          Upcoming Events
        </Typography>
      </Container>
      <EventsComponent />
    </Box>
  );
}

export default Events;
