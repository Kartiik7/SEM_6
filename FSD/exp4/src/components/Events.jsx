import React from 'react';
import { useAppContext } from '../context/AppContext';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';

const eventsData = [
  {
    title: "Hackathon 2026",
    date: "March 15, 10:00 AM",
    category: "Technical",
    image: "https://images.unsplash.com/photo-1504384308090-c54be3855833?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "24-hour coding marathon to solve real-world problems."
  },
  {
    title: "Robo Wars",
    date: "March 16, 2:00 PM",
    category: "Robotics",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Build and battle your custom robots in the arena."
  },
  {
    title: "Battle of Bands",
    date: "March 17, 6:00 PM",
    category: "Cultural",
    image: "https://images.unsplash.com/photo-1514525253440-b393452e3383?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Electrifying musical performances by college bands."
  },
  {
    title: "Gaming Tournament",
    date: "March 16, 11:00 AM",
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Valorant, FIFA, and CS:GO championship."
  }
];

const Events = () => {
  const { state, dispatch } = useAppContext();
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const isBookmarked = (eventTitle) => {
    return state.bookmarks.some(item => item.title === eventTitle);
  };

  const handleBookmark = (event) => {
    if (isBookmarked(event.title)) {
        dispatch({ type: 'REMOVE_BOOKMARK', payload: event.title }); // Assuming title is unique ID for now
    } else {
        dispatch({ type: 'ADD_BOOKMARK', payload: { ...event, id: event.title } }); // Using title as ID
        setOpenSnackbar(true);
    }
  };
    
  return (
    <Box component="section" sx={{ py: 10, bgcolor: '#f8f9fa' }} id="events">
      <Container>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" fontWeight={700} sx={{ mb: 2 }}>
            Featured Events
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            Explore our diverse lineup of technical, cultural, and gaming events designed to challenge and entertain.
          </Typography>
        </Box>

        <div className="row g-4">
          {eventsData.map((event, index) => (
            <div className="col-12 col-md-6 col-lg-3" key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 3 }} className="hover-lift">
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={event.image}
                    alt={event.title}
                  />
                  <Chip 
                    label={event.category} 
                    color="primary" 
                    size="small" 
                    sx={{ position: 'absolute', top: 10, right: 10 }} 
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 1, fontWeight: 'bold' }}>
                    {event.date}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
                    {event.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {event.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button 
                    size="small" 
                    variant={isBookmarked(event.title) ? "outlined" : "contained"} 
                    color={isBookmarked(event.title) ? "secondary" : "primary"}
                    fullWidth 
                    disableElevation
                    onClick={() => handleBookmark(event)}
                  >
                    {isBookmarked(event.title) ? "Remove from Schedule" : "Add to Schedule"}
                  </Button>
                </CardActions>
              </Card>
            </div>
          ))}
        </div>
        
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button variant="outlined" size="large" sx={{ borderRadius: 10, px: 4 }}>
            View All Events
          </Button>
        </Box>
        <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={() => setOpenSnackbar(false)}>
            <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: '100%' }}>
                Event added to your schedule!
            </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Events;
