import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { setCategoryFilter } from '../redux/slices/scheduleSlice';

const FilterBar = ({ categories }) => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.schedule.categoryFilter);

  const handleFilterChange = (category) => {
    dispatch(setCategoryFilter(category));
  };

  return (
    <Stack
      direction="row"
      spacing={2}
      flexWrap="wrap"
      justifyContent="center"
      sx={{ mb: 5 }}
    >
      {categories.map((category) => (
        <Chip
          key={category}
          label={category}
          clickable
          color={currentFilter === category ? 'secondary' : 'default'}
          variant={currentFilter === category ? 'filled' : 'outlined'}
          onClick={() => handleFilterChange(category)}
          sx={{ fontWeight: 600, px: 1 }}
        />
      ))}
    </Stack>
  );
};

export default FilterBar;
