import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';

const speakers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Chief AI Scientist",
    company: "TechNova Labs",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Mark Davison",
    role: "Founder & CEO",
    company: "Startup Sphere",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Emily Clark",
    role: "Senior UX Designer",
    company: "Creative Minds",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "James Rodriguez",
    role: "Tech Evangelist",
    company: "Cloud Systems",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  }
];

const Speakers = () => {
  return (
    <Box component="section" sx={{ py: 10, bgcolor: '#white' }} id="speakers">
      <Container>
         <Typography variant="overline" align="center" display="block" color="secondary" sx={{ fontWeight: 'bold', mb: 1 }}>
            LEARN FROM THE BEST
         </Typography>
         <Typography variant="h3" align="center" fontWeight={700} sx={{ mb: 8 }}>
            Distinguished Speakers
         </Typography>

         <Grid container spacing={5}>
            {speakers.map((speaker, index) => (
               <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                  <Box sx={{ textAlign: 'center' }} className="hover-lift">
                     <Box sx={{ position: 'relative', display: 'inline-block', mb: 3 }}>
                        <Avatar 
                           src={speaker.image} 
                           alt={speaker.name}
                           sx={{ width: 180, height: 180, mx: 'auto', border: '5px solid #f0f0f0' }}
                        />
                        <Box sx={{ 
                           position: 'absolute', 
                           bottom: 0, 
                           right: 10, 
                           bgcolor: 'primary.main', 
                           width: 40, 
                           height: 40, 
                           borderRadius: '50%',
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'center',
                           color: 'white',
                           border: '3px solid white'
                        }}>
                           <LanguageIcon fontSize="small" />
                        </Box>
                     </Box>
                     <Typography variant="h6" fontWeight="bold">
                        {speaker.name}
                     </Typography>
                     <Typography variant="subtitle2" color="primary.main" gutterBottom>
                        {speaker.role}
                     </Typography>
                     <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {speaker.company}
                     </Typography>
                     
                     <Box>
                        <IconButton size="small" color="primary"><LinkedInIcon /></IconButton>
                        <IconButton size="small" color="primary"><TwitterIcon /></IconButton>
                     </Box>
                  </Box>
               </Grid>
            ))}
         </Grid>
      </Container>
    </Box>
  );
};

export default Speakers;
