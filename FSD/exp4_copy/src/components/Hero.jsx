import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'; // Grid version 1 (compatible with v5)
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Container } from '@mui/material';

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        bgcolor: 'background.default',
        color: 'text.primary',
        pt: { xs: 15, md: 25 },
        pb: { xs: 8, md: 15 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container>
        <Box sx={{ maxWidth: '800px' }}>
          <Typography variant="body1" sx={{ mb: 2, letterSpacing: 1.5, color: 'text.secondary', textTransform: 'uppercase', fontSize: '0.8rem' }}>
            March 15-17, 2026 — University Main Campus
          </Typography>
          <Typography variant="h1" component="h1" sx={{ fontWeight: 600, mb: 3, letterSpacing: '-2px', lineHeight: 1 }}>
            The Tech & <br />
            Cultural Fest.
          </Typography>
          <Typography variant="h6" sx={{ mb: 6, fontWeight: 300, color: 'text.secondary', maxWidth: '600px', lineHeight: 1.6 }}>
            Three days of innovation, music, and learning. Experience the future with us.
          </Typography>

          <Box sx={{ display: 'flex', gap: 3 }}>
            <Button 
              component="a"
              href="#register"
              variant="contained" 
              color="primary" 
              size="large" 
              disableElevation
              sx={{ 
                borderRadius: 0, 
                px: 5, 
                py: 1.5, 
                fontSize: '1rem',
                textTransform: 'none',
                bgcolor: 'text.primary',
                color: 'background.paper',
                '&:hover': {
                  bgcolor: 'text.secondary'
                }
              }}
            >
              Register
            </Button>
            <Button 
              component="a"
              href="#schedule"
              variant="text" 
              color="inherit" 
              size="large" 
              disableRipple
              sx={{ 
                px: 0, 
                py: 1.5, 
                fontSize: '1rem', 
                textTransform: 'none',
                '&:hover': {
                  bgcolor: 'transparent',
                  textDecoration: 'underline'
                }
              }}
            >
              View Schedule
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
