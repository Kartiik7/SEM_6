import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'text.primary', color: 'white', py: 6 }}>
      <Container>
        <Grid container spacing={4} justifyContent="space-between" alignItems="center">
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              College Fest 2026
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              Celebrating innovation, culture, and creativity. Join us for the biggest event of the year.
            </Typography>
          </Grid>
          
          <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: { xs: 'left', md: 'center' } }}>
             <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'flex-start', md: 'center' } }}>
                <IconButton color="inherit" aria-label="Facebook">
                   <FacebookIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="Twitter">
                   <TwitterIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="Instagram">
                   <InstagramIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="LinkedIn">
                   <LinkedInIcon />
                </IconButton>
             </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
             <Link href="#" color="inherit" sx={{ display: 'block', mb: 1, textDecoration: 'none', opacity: 0.8, '&:hover':{opacity: 1} }}>
                Term of Service
             </Link>
             <Link href="#" color="inherit" sx={{ display: 'block', mb: 1, textDecoration: 'none', opacity: 0.8, '&:hover':{opacity: 1} }}>
                Privacy Policy
             </Link>
          </Grid>
        </Grid>
        
        <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', mt: 4, pt: 3, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ opacity: 0.5 }}>
            &copy; {new Date().getFullYear()} College Name. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
