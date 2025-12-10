import { useState } from 'react';
//import {Catalog} from '../../features/catalog/Catalog';
import {Box, Container, createTheme, CssBaseline, ThemeProvider} from '@mui/material';
import { Navbar } from './Navbar';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../store/store';

function App() {

  const {darkMode} = useAppSelector(state => state.ui);
  const palletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: palletteType,
      background: {
        default: palletteType === 'light' ? '#eaeaea' : '#121212'
      } 
    }

  });

 

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Navbar />
    <Box 
      sx={{
        background: darkMode ? "radial-gradient(circle, #1e3aBa, #111B27)":"radial-gradient(circle, #baecf9, #f0f9ff)", 
        minHeight:"100vh",
        py:6,
         width: '100vw',


        }}>
  <Container maxWidth="xl" sx={{mt:8}}>
   
      <Outlet />

    </Container>
    </Box>
    </ThemeProvider>
  
  );
}
export default App;