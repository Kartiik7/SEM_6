import React from 'react';
import SpeakersComponent from '../components/Speakers';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Speakers() {
  return (
    <Box sx={{ py: 4 }}>
      <Container>
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4, fontWeight: 'bold', color: 'primary.main' }}>
          Our Speakers
        </Typography>
      </Container>
      <SpeakersComponent />
    </Box>
  );
}

export default Speakers;
