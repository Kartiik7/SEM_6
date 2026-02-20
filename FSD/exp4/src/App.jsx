import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SchedulePage from './pages/Schedule';
import EventsPage from './pages/Events';
import SpeakersPage from './pages/Speakers';
import RegisterPage from './pages/Register';
import MySchedule from './pages/MySchedule';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <Router>
      <AppProvider>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/speakers" element={<SpeakersPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/my-schedule" element={<MySchedule />} />
          </Routes>
        </main>
        <Footer />
      </AppProvider>
    </Router>
  );
}

export default App;
