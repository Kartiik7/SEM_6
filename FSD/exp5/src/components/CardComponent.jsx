import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { addEvent, removeEvent } from '../redux/slices/scheduleSlice';

const CardComponent = ({ event }) => {
  const dispatch = useDispatch();
  const isBookmarked = useSelector((state) =>
    state.schedule.bookmarks.some((item) => item.id === event.id),
  );

  const handleBookmark = () => {
    if (isBookmarked) {
      dispatch(removeEvent(event.id));
    } else {
      dispatch(addEvent(event));
    }
  };

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 3 }} className="hover-lift">
      <Box sx={{ position: 'relative' }}>
        <CardMedia component="img" height="200" image={event.image} alt={event.title} />
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
          variant={isBookmarked ? 'outlined' : 'contained'}
          color={isBookmarked ? 'secondary' : 'primary'}
          fullWidth
          disableElevation
          onClick={handleBookmark}
        >
          {isBookmarked ? 'Remove from Schedule' : 'Add to Schedule'}
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
