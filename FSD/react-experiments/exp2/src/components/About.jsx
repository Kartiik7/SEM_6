import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const About = () => {
  const highlights = [
    {
      icon: <LightbulbIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Innovation',
      description: 'Showcase your groundbreaking ideas and projects to industry experts.'
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 40, color: 'secondary.main' }} />,
      title: 'Networking',
      description: 'Connect with over 500+ participants and professionals from top companies.'
    },
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 40, color: '#f1c40f' }} />,
      title: 'Competitions',
      description: 'Participate in 20+ events including hackathons, coding contests, and robotics.'
    }
  ];

  return (
    <Box component="section" sx={{ py: 10, bgcolor: 'background.paper' }} id="about">
      <Container>
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="overline" color="primary" sx={{ fontWeight: 'bold', letterSpacing: 1 }}>
              ABOUT THE EVENT
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 3 }}>
              Where Technology Meets <span style={{ color: '#e74c3c' }}>Creativity</span>
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', color: 'text.secondary' }}>
              College Fest 2026 is the premier annual technical and cultural festival of our University. 
              Designed to foster innovation and creativity, it brings together the brightest minds to compete, 
              learn, and celebrate.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', color: 'text.secondary' }}>
              Whether you are a coder, a designer, a gamer, or an artist, there is something for everyone. 
              Join us for three days of non-stop action, learning, and fun!
            </Typography>
          </Grid>
          
          <Grid size={{ xs: 12, md: 6 }}>
            <Grid container spacing={3}>
              {highlights.map((item, index) => (
                <Grid size={{ xs: 12 }} key={index}>
                  <Card sx={{ display: 'flex', alignItems: 'center', p: 2, boxShadow: 2, borderRadius: 3 }} className="hover-lift">
                    <Box sx={{ mr: 3 }}>
                      {item.icon}
                    </Box>
                    <CardContent sx={{ flex: '1 0 auto', p: '0 !important' }}>
                      <Typography component="div" variant="h6" fontWeight="bold">
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" component="div">
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
