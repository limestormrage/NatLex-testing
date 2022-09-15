import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { Footer, Header } from './components';

export default function Layout(): JSX.Element {
  return (
    <Box
      height="100vh"
      sx={{
        fontFamily: 'Roboto, Arial, sans-serif',
        fontSize: '16px',
        color: '#0288d1',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: '1',
      }}
      >
        <Outlet />
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
}
