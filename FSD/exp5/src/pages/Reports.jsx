import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { addEvent, clearBookmarks } from '../redux/slices/scheduleSlice';
import { useAppContext } from '../context/AppContext';

const Reports = () => {
  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.schedule.bookmarks);
  const { themeMode } = useAppContext();

  const insights = useMemo(() => {
    const total = bookmarks.length;
    const categoryStats = bookmarks.reduce((acc, event) => {
      acc[event.category] = (acc[event.category] || 0) + 1;
      return acc;
    }, {});

    const topCategory = Object.entries(categoryStats).sort((a, b) => b[1] - a[1])[0]?.[0] || 'Technical';
    const completionPercentage = Math.min(100, total * 20);

    const timeline = bookmarks.slice(0, 4).map((event) => ({
      label: event.title,
      date: event.date,
      category: event.category,
    }));

    return {
      total,
      categoryStats,
      topCategory,
      completionPercentage,
      timeline,
    };
  }, [bookmarks]);

  const handleAddSpotlight = () => {
    const spotlightEvent = {
      id: `spotlight-${Date.now()}`,
      title: 'Innovation Lab Tour',
      date: 'March 18, 4:00 PM',
      category: 'Technical',
      description: 'Guided walkthrough of cutting-edge college projects.',
      image:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    };
    dispatch(addEvent(spotlightEvent));
  };

  return (
    <Box sx={{ py: 8, bgcolor: themeMode === 'dark' ? '#0b1120' : '#f8f9fa', minHeight: '80vh' }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" fontWeight={700} color="primary.main">
            Reports & Insights
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: 640, mx: 'auto', mt: 2 }}>
            Track engagement across categories, surface popular sessions, and project attendee readiness in real time.
          </Typography>
          <Chip label={`Theme: ${themeMode.toUpperCase()}`} color="secondary" sx={{ mt: 3, fontWeight: 600 }} />
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: 3, height: '100%' }}>
              <Typography variant="subtitle2" color="text.secondary">
                Scheduled Sessions
              </Typography>
              <Typography variant="h2" fontWeight={700} sx={{ mt: 1 }}>
                {insights.total}
              </Typography>
              <LinearProgress variant="determinate" value={insights.completionPercentage} sx={{ mt: 3, borderRadius: 4 }} />
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Planning progress {insights.completionPercentage}% complete
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 3 }}>
                <Button variant="contained" onClick={handleAddSpotlight} fullWidth>
                  Add Spotlight Event
                </Button>
                <Button variant="outlined" color="secondary" onClick={() => dispatch(clearBookmarks())} fullWidth disabled={!insights.total}>
                  Clear All
                </Button>
              </Stack>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: 3, height: '100%' }}>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                Category Mix
              </Typography>
              <Stack spacing={1}>
                {Object.keys(insights.categoryStats).length === 0 && (
                  <Typography variant="body2" color="text.secondary">
                    Bookmark sessions to see analytics.
                  </Typography>
                )}
                {Object.entries(insights.categoryStats).map(([category, count]) => (
                  <Stack key={category} direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="subtitle1" fontWeight={600}>
                      {category}
                    </Typography>
                    <Chip label={`${count} events`} color={category === insights.topCategory ? 'primary' : 'default'} variant={category === insights.topCategory ? 'filled' : 'outlined'} />
                  </Stack>
                ))}
              </Stack>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: 3, height: '100%' }}>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                Upcoming Timeline
              </Typography>
              {insights.timeline.length === 0 ? (
                <Typography variant="body2" color="text.secondary">
                  Your curated timeline will appear here once events are added.
                </Typography>
              ) : (
                <List disablePadding>
                  {insights.timeline.map((item) => (
                    <ListItem key={item.label} alignItems="flex-start" sx={{ px: 0 }}>
                      <Avatar sx={{ mr: 2, bgcolor: 'secondary.main' }}>{item.category.charAt(0)}</Avatar>
                      <ListItemText
                        primary={
                          <Typography variant="subtitle1" fontWeight={600}>
                            {item.label}
                          </Typography>
                        }
                        secondary={
                          <>
                            <Typography variant="body2" color="text.secondary">
                              {item.date}
                            </Typography>
                            <Chip label={item.category} size="small" sx={{ mt: 1 }} />
                          </>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Reports;
