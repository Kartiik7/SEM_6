import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import { removeEvent, clearBookmarks } from '../redux/slices/scheduleSlice';
import { useAppContext } from '../context/AppContext';

const MySchedule = () => {
  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.schedule.bookmarks);
  const { isDarkMode } = useAppContext();

  const totalEvents = useMemo(() => bookmarks.length, [bookmarks]);
  const upcomingCategories = useMemo(() => {
    const tally = bookmarks.reduce((acc, event) => {
      acc[event.category] = (acc[event.category] || 0) + 1;
      return acc;
    }, {});
    return Object.entries(tally)
      .map(([category, count]) => `${category} (${count})`)
      .join(', ');
  }, [bookmarks]);

  const handleRemove = (id) => {
    dispatch(removeEvent(id));
  };

  const handleClear = () => {
    dispatch(clearBookmarks());
  };

  return (
    <Box sx={{ py: 8, minHeight: '80vh', bgcolor: isDarkMode ? '#0f172a' : '#f8f9fa' }}>
      <Container>
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4, fontWeight: 'bold', color: 'primary.main' }}>
          My Schedule
        </Typography>

        <Box sx={{ mb: 4, p: 3, bgcolor: 'white', borderRadius: 2, boxShadow: 1, textAlign: 'center' }}>
          <Typography variant="h5" color="text.secondary">
            Total Scheduled Events: <strong>{totalEvents}</strong>
          </Typography>
          {bookmarks.length > 0 && (
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Spread across: {upcomingCategories}
            </Typography>
          )}
          {bookmarks.length > 0 && (
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<PlaylistRemoveIcon />}
              sx={{ mt: 2 }}
              onClick={handleClear}
            >
              Clear Schedule
            </Button>
          )}
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
