# Experiment 3: React Router Multi-Page Extension

## Overview
This project is an extension of the "College Event Page" (Experiment 2), upgraded to a **Multi-Page Application (MPA)** using **React Router**. It demonstrates client-side routing, modular folder structure, and consistent UI design across multiple pages without page reloads.

## Features
- **Multi-Page Navigation:** Seamless transitions between pages using `react-router-dom`.
- **Pages Included:**
    - **Home:** Landing page with Hero, About, and Venue sections.
    - **Events:** Dedicated page for upcoming events.
    - **Schedule:** Detailed timeline of the event.
    - **Speakers:** Profiles of guest speakers.
    - **Register:** User registration form.
- **Responsive Design:** Built with **Bootstrap 5** and **Material UI** for a mobile-friendly experience.
- **Component Reusability:** Navbar, Footer, and content sections are modular components.

## Tech Stack
- **Framework:** React + Vite
- **Routing:** React Router Dom (v7)
- **Styling:** Material UI (@mui/material), Bootstrap 5, Emotion
- **Icons:** Material UI Icons

## Project Structure
```
src/
├── components/        # Reusable UI components (Navbar, Footer, etc.)
├── pages/             # Page-level components (Home, Events, Schedule, etc.)
├── App.jsx            # Main application component with Route definitions
├── main.jsx           # Entry point
└── index.css          # Global styles
```

## Installation & Setup

1. **Navigate to the project directory:**
   ```bash
   cd d:\SEM_6\FSD\exp3
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Key Learnings
- Implementing `BrowserRouter`, `Routes`, and `Route`.
- Using `NavLink` for active navigation state.
- Structuring a React project for scalability.
- Managing navigation in a Single Page Application (SPA).
