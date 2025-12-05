import { useState } from 'react';
//import {Catalog} from '../../features/catalog/Catalog';
import {Box, Container, createTheme, CssBaseline, ThemeProvider} from '@mui/material';
import { Navbar } from './Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  const [darkMode, setDarkMode] = useState(false);


  const palletteType = darkMode ? 'dark' : 'light';

  const theme = createTheme({
    palette: {
      mode: palletteType,
      background: {
        default: palletteType === 'light' ? '#eaeaea' : '#121212'
      } 
    }

  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };



 

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
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