import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Venue = () => {
  return (
    <Box component="section" sx={{ py: 10, bgcolor: 'primary.main', color: 'white' }} id="contact">
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography variant="overline" sx={{ letterSpacing: 1, opacity: 0.8 }}>
              FIND US
            </Typography>
            <Typography variant="h3" fontWeight={700} sx={{ mb: 4 }}>
              Venue & Contact
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, opacity: 0.9, fontSize: '1.1rem' }}>
              Join us at the University Main Campus for an unforgettable experience. 
              The venue is easily accessible by public transport and has ample parking space.
            </Typography>
            
            <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
              <LocationOnIcon color="secondary" fontSize="large" />
              <Box>
                <Typography variant="h6">University Main Campus</Typography>
                <Typography variant="body2" sx={{ opacity: 0.7 }}>123 University Road, Tech City, State - 500001</Typography>
              </Box>
            </Box>

            <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
              <PhoneIcon color="secondary" fontSize="large" />
              <Box>
                <Typography variant="h6">+91 98765 43210</Typography>
                <Typography variant="body2" sx={{ opacity: 0.7 }}>Event Coordinator</Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <EmailIcon color="secondary" fontSize="large" />
              <Box>
                <Typography variant="h6">contact@collegefest.edu</Typography>
                <Typography variant="body2" sx={{ opacity: 0.7 }}>General Enquiries</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Paper elevation={10} sx={{ borderRadius: 3, overflow: 'hidden', height: 400 }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15224.99613161204!2d78.3728364!3d17.4477815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688eb5c55042db!2sHitech%20City%2C%20Hyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sus!4v1625641234567!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Google Map"
              ></iframe>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Venue;
