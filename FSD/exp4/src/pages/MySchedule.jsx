import React, { useMemo } from 'react';
import { useAppContext } from '../context/AppContext';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';

const MySchedule = () => {
  const { state, dispatch } = useAppContext();
  const { bookmarks } = state;

  // useMemo usage: Calculate total events count (derived state)
  const totalEvents = useMemo(() => {
    console.log("Calculating total events...");
    return bookmarks.length;
  }, [bookmarks]);

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_BOOKMARK', payload: id });
  };

  return (
    <Box sx={{ py: 8, minHeight: '80vh', bgcolor: '#f8f9fa' }}>
      <Container>
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4, fontWeight: 'bold', color: 'primary.main' }}>
          My Schedule
        </Typography>

        <Box sx={{ mb: 4, p: 3, bgcolor: 'white', borderRadius: 2, boxShadow: 1, textAlign: 'center' }}>
          <Typography variant="h5" color="text.secondary">
            Total Scheduled Events: <strong>{totalEvents}</strong>
          </Typography>
        </Box>

        {bookmarks.length === 0 ? (
          <Typography variant="h6" align="center" color="text.secondary" sx={{ mt: 4 }}>
            No events bookmarked yet. Go to Events page to add some!
          </Typography>
        ) : (
          <Grid container spacing={4}>
            {bookmarks.map((event) => (
              <Grid item key={event.id || event.title} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 2 }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" component="div" fontWeight="bold">
                      {event.title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {event.date}
                    </Typography>
                    <Typography variant="body2">
                      {event.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button 
                      size="small" 
                      color="error" 
                      startIcon={<DeleteIcon />} 
                      onClick={() => handleRemove(event.id || event.title)}
                    >
                      Remove
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default MySchedule;
