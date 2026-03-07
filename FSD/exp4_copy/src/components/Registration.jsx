import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

const eventsList = [
  'Hackathon 2026',
  'Robo Wars',
  'Battle of Bands',
  'Gaming Tournament',
  'General Entry'
];

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    year: '',
    event: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is invalid";
    if (!formData.college) tempErrors.college = "College Name is required";
    if (!formData.year) tempErrors.year = "Year/Department is required";
    if (!formData.event) tempErrors.event = "Please select an event";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
        setFormData({
            name: '',
            email: '',
            college: '',
            year: '',
            event: ''
        });
        setTimeout(() => setSuccess(false), 5000);
      }, 2000);
    }
  };

  return (
    <Box component="section" sx={{ py: 10, bgcolor: 'background.paper' }} id="register">
      <Container maxWidth="sm">
        <Typography variant="h4" fontWeight={600} align="left" sx={{ mb: 4, letterSpacing: '-0.5px' }}>
          Registration
        </Typography>

        {success && (
          <Alert severity="success" sx={{ mb: 3, borderRadius: 0 }}>
            Registration successful.
          </Alert>
        )}
        
        <form onSubmit={handleSubmit} noValidate>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <TextField
              fullWidth
              label="Full Name"
              name="name"
              variant="standard"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              variant="standard"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              fullWidth
              label="College / University"
              name="college"
              variant="standard"
              value={formData.college}
              onChange={handleChange}
              error={!!errors.college}
              helperText={errors.college}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              fullWidth
              label="Year & Department"
              name="year"
              placeholder="e.g. 3rd Year CSE"
              variant="standard"
              value={formData.year}
              onChange={handleChange}
              error={!!errors.year}
              helperText={errors.year}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              select
              fullWidth
              label="Interested Event"
              name="event"
              variant="standard"
              value={formData.event}
              onChange={handleChange}
              error={!!errors.event}
              helperText={errors.event}
              InputLabelProps={{ shrink: true }}
            >
              {eventsList.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            
            <Box sx={{ mt: 2 }}>
              <Button 
                type="submit" 
                variant="outlined" 
                color="primary" 
                size="large"
                disabled={loading}
                disableElevation
                sx={{ 
                  borderRadius: 0, 
                  px: 4, 
                  py: 1, 
                  textTransform: 'none', 
                  borderColor: 'text.primary', 
                  color: 'text.primary',
                  '&:hover': {
                    bgcolor: 'text.primary',
                    color: 'background.paper'
                  }
                }}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : 'Register'}
              </Button>
            </Box>
          </Box>
        </form>
      </Container>
    </Box>
  );
};

export default Registration;
