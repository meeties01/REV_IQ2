import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import ContractManagementPage from './pages/ContractManagementPage';
import ContractManagementDashboard from './pages/Dashboard/Dashboard';
import Negotiation from './pages/Negotiation/Negotiation';
import Creation from './pages/Creation/Creation';
import Review from './pages/Review/Review';
import Administration from './pages/Administration/Administration';
import Milestone from './pages/Milestone/Milestone';
import Performance from './pages/Performance/Performance';
import Renewal from './pages/Renewal/Renewal';
import Reporting from './pages/Reporting/Reporting';

const theme = createTheme();

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <ContractManagementDashboard />,
    },
    {
      path: '/contract',
      element: <ContractManagementPage />,
    },
    {
      path: '/dashboard',
      element: <ContractManagementDashboard />,
    },
    {
      path: '/creation',
      element: <Creation />,
    },
    {
      path: '/negotiation',
      element: <Negotiation />,
    },
    {
      path: '/review',
      element: <Review />,
    },
    {
      path: '/administration',
      element: <Administration />,
    },
    {
      path: '/milestone',
      element: <Milestone />,
    },
    {
      path: '/performance',
      element: <Performance />,
    },
    {
      path: '/renewal',
      element: <Renewal />,
    },
    {
      path: '/reporting',
      element: <Reporting />,
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
      <ToastContainer aria-label="Notification container" />
    </ThemeProvider>
  );
};

export default App;
