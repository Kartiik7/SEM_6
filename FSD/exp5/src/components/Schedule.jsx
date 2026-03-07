import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Paper from '@mui/material/Paper';

const scheduleData = {
  day1: [
    { time: "10:00 AM", event: "Inauguration Ceremony", location: "Main Auditorium" },
    { time: "11:30 AM", event: "Keynote: Future of AI", location: "Main Auditorium" },
    { time: "01:00 PM", event: "Lunch Break", location: "Cafeteria" },
    { time: "02:00 PM", event: "Hackathon Begins", location: "Tech Park" },
    { time: "04:00 PM", event: "Workshops", location: "Seminar Hall" },
  ],
  day2: [
    { time: "09:00 AM", event: "Robo Wars Round 1", location: "Open Arena" },
    { time: "11:00 AM", event: "Panel Discussion", location: "Main Auditorium" },
    { time: "02:00 PM", event: "Gaming Tournament", location: "Lab 5" },
    { time: "05:00 PM", event: "Standup Comedy", location: "OAT" },
  ],
  day3: [
    { time: "10:00 AM", event: "Project Exhibition", location: "Exhibition Hall" },
    { time: "01:00 PM", event: "Hackathon Judging", location: "Tech Park" },
    { time: "06:00 PM", event: "Closing Ceremony", location: "Main Auditorium" },
    { time: "07:30 PM", event: "DJ Night", location: "OAT" },
  ]
};

const Schedule = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const getDayData = () => {
    if (tabValue === 0) return scheduleData.day1;
    if (tabValue === 1) return scheduleData.day2;
    return scheduleData.day3;
  };

  return (
    <Box component="section" sx={{ py: 10 }} id="schedule">
      <Container maxWidth="md">
        <Typography variant="h3" align="center" fontWeight={700} sx={{ mb: 6 }}>
          Event Schedule
        </Typography>
        
        <Paper elevation={3} sx={{ borderRadius: 4, overflow: 'hidden' }}>
          <Tabs 
            value={tabValue} 
            onChange={handleChange} 
            variant="fullWidth" 
            indicatorColor="secondary"
            textColor="secondary"
            sx={{ bgcolor: '#f8f9fa' }}
          >
            <Tab label="Day 1 - March 15" sx={{ fontWeight: 'bold' }} />
            <Tab label="Day 2 - March 16" sx={{ fontWeight: 'bold' }} />
            <Tab label="Day 3 - March 17" sx={{ fontWeight: 'bold' }} />
          </Tabs>
          
          <Box sx={{ p: { xs: 2, md: 5 } }}>

            
            {/* Revised Layout for alignment */}
            {getDayData().map((item, index) => (
              <div 
                key={index}
                className="row g-0 align-items-center mb-4"
                style={{ position: 'relative' }}
              >
                  <div className="col-auto text-end pe-4" style={{ minWidth: '120px' }}>
                     <Typography variant="h6" color="primary" sx={{ fontWeight: 700 }}>
                        {item.time}
                     </Typography>
                  </div>
                  
                  <div className="col-auto position-relative">
                     <div 
                        style={{ 
                          width: '16px', 
                          height: '16px', 
                          borderRadius: '50%', 
                          background: '#e74c3c',
                          border: '4px solid white',
                          boxShadow: '0 0 0 2px #e74c3c',
                          zIndex: 2,
                          position: 'relative'
                        }}
                     />
                     {index !== getDayData().length - 1 && (
                        <div 
                          style={{
                            position: 'absolute',
                            top: '16px',
                            left: '7px',
                            width: '2px',
                            height: '100%',
                            background: '#e0e0e0',
                            zIndex: 0,
                            minHeight: '40px'
                          }}
                        />
                     )}
                  </div>

                  <div className="col ps-4">
                     <Paper elevation={1} sx={{ p: 2, borderLeft: '4px solid #3498db' }} className="hover-lift">
                        <Typography variant="h6" fontWeight="bold">{item.event}</Typography>
                        <Typography variant="body2" color="text.secondary">{item.location}</Typography>
                     </Paper>
                  </div>
              </div>
            ))}

          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Schedule;
