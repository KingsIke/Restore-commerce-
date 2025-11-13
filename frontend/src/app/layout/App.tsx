import { useEffect, useState } from 'react';
import axios from 'axios';
import type { IProduct } from '../model/product';
import Catalog from '../../features/catalog/Catalog';
import {Box, Container, createTheme, CssBaseline, ThemeProvider} from '@mui/material';
import { Navbar } from './Navbar';

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
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

  useEffect(() => {
    axios.get('http://localhost:3050/api/products')
      .then(response => {
        console.log('Axios response:', response);
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Axios error:', error);
      });
  }, []);

 

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    <Box 
      sx={{
        background: darkMode ? "radial-gradient(circle, #1e3aBa, #111B27)":"radial-gradient(circle, #baecf9, #f0f9ff)", 
        minHeight:"100vh",
        py:6

        }}>
  <Container maxWidth="xl" sx={{mt:8}}>
   
      <Catalog products={products} />

    </Container>
    </Box>
    </ThemeProvider>
  
  );
}
export default App;