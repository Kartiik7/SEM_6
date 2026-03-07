import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import FilterBar from './FilterBar';
import CardComponent from './CardComponent';

const eventsData = [
  {
    id: 'hackathon-2026',
    title: "Hackathon 2026",
    date: "March 15, 10:00 AM",
    category: "Technical",
    image: "https://images.unsplash.com/photo-1504384308090-c54be3855833?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "24-hour coding marathon to solve real-world problems."
  },
  {
    id: 'robo-wars',
    title: "Robo Wars",
    date: "March 16, 2:00 PM",
    category: "Robotics",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Build and battle your custom robots in the arena."
  },
  {
    id: 'battle-of-bands',
    title: "Battle of Bands",
    date: "March 17, 6:00 PM",
    category: "Cultural",
    image: "https://images.unsplash.com/photo-1514525253440-b393452e3383?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Electrifying musical performances by college bands."
  },
  {
    id: 'gaming-tournament',
    title: "Gaming Tournament",
    date: "March 16, 11:00 AM",
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Valorant, FIFA, and CS:GO championship."
  }
];

const Events = () => {
  const bookmarks = useSelector((state) => state.schedule.bookmarks);
  const categoryFilter = useSelector((state) => state.schedule.categoryFilter);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const previousCount = useRef(bookmarks.length);

  useEffect(() => {
    if (bookmarks.length > previousCount.current) {
      setOpenSnackbar(true);
    }
    previousCount.current = bookmarks.length;
  }, [bookmarks.length]);

  const categories = useMemo(() => ['All', ...new Set(eventsData.map((event) => event.category))], []);

  const filteredEvents = useMemo(() => {
    if (categoryFilter === 'All') {
      return eventsData;
    }
    return eventsData.filter((event) => event.category === categoryFilter);
  }, [categoryFilter]);
    
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
        <FilterBar categories={categories} />

        <Grid container spacing={4}>
          {filteredEvents.map((event) => (
            <Grid item xs={12} sm={6} md={3} key={event.id}>
              <CardComponent event={event} />
            </Grid>
          ))}
        </Grid>
        
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
