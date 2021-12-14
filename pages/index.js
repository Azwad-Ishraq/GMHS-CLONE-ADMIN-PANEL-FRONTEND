import { Box, Container, Grid, Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect } from 'react';
import NavBar from '../Components/NavBar/NavBar';
import News from '../Components/News/News';
import Notices from '../Components/Notices/Notices';

// #02a650

const theme = createTheme({
  palette: {
    primary: {
      main: '#02a650',
    },
    secondary: {
      main: '#ffffff'
    },

  },

});
export default function Home() {

  return (

    <ThemeProvider theme={theme}>

      <Box>
        <NavBar></NavBar>


    <Container sx={{mt:15}}>
      <Notices></Notices>
      <News></News>
    </Container>
        
      </Box>
    </ThemeProvider>


  )
}
