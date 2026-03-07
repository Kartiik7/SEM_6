import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Tooltip from '@mui/material/Tooltip';
import { useAppContext } from '../context/AppContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useAppContext();

  return (
    <Tooltip title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
      <FormControlLabel
        control={<Switch checked={isDarkMode} onChange={toggleTheme} color="default" />}
        label={isDarkMode ? 'Dark' : 'Light'}
        sx={{
          ml: 2,
          '& .MuiFormControlLabel-label': {
            fontWeight: 600,
            color: 'text.primary',
          },
        }}
      />
    </Tooltip>
  );
};

export default ThemeToggle;
