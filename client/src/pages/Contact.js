import * as React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';


const theme = createTheme({
  palette: {
    primary: {
      light: '#fafafa',
      main: '#ffb300',
      dark: '#fafafa',
      contrastText: '#fff',
     
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  text: {
    secondary: {
      align: 'center',
    }
  }
  },
});


export default function Contact() {
    return(
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
        
          <Typography sx={{ p: 2.0 }} variant="h2" align="center"> Contact</Typography>
    <Grid container spacing={2}> 

    <Grid item xs={4}>         
    <Card sx={4}>
       <CardMedia
        component="img"
        height="400"
        image="./assets/images/Github.jpg"
        alt="green iguana"
      /> 
      {/* <Image src="./assets/images/AssaultIntercessor.jpg" /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center">
          Github
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" sx={{ mx: "auto" }} >
      <a href="https://github.com/JMagic-Learner" class="downloadable" target="_blank" rel="noreferrer" margin="auto" >GITHUB Repository</a>
       </Button>
      </CardActions>
    </Card>
    </Grid>



    <Grid item xs={4}>         
    <Card sx={4}>
    <CardMedia
        component="img"
        height="340"
        image="./assets/images/JasonMaBanner.jpg"
        alt="green iguana"
      /> 
      <CardContent>
        <Typography gutterBottom variant="h4" component="div" align="center">
          CONTACT INFORMATION
        </Typography>
        <Typography variant="h5" sx={{ mx: "auto" }} color="text.secondary" align="center">
          GITHUB USERNAME: JMAGIC-LEARNER
        </Typography>
        <Typography variant="h5" sx={{ mx: "auto" }}  color="text.secondary" align="center" >
         EMAIL: MaJason93@gmail.com
        </Typography>
        <Typography variant="h5" sx={{ mx: "auto" }} color="text.secondary" align="center" >
          PHONE: 253 389 7521
        </Typography>
       
      </CardContent>
    </Card>
    </Grid>

    <Grid item xs={4}>         
    <Card sx={4}>
       <CardMedia
        component="img"
        height="400"
        image="./assets/images/Linkedin.jpg"
        alt="green iguana"
      /> 
      {/* <Image src="./assets/images/AssaultIntercessor.jpg" /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center">
          LinkedIn
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" sx={{ mx: "auto" }} >
      <a href="https://www.linkedin.com/in/jason-ma-970417113" target="_blank" rel="noreferrer" margin="auto" >LINKEDIN </a>
      
       </Button>
      </CardActions>
    </Card>
    </Grid>
  
        </Grid>
        </Box>
        </ThemeProvider>
    )
}