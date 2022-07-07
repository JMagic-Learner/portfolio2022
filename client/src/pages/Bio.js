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
import { Paper } from '@mui/material';

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
  },
});

export default function Bio() {
  return (

    <Box sx={{ flexGrow: 1 }}>
      {/* Lets define the two columns, with spacing in between of 2 */}
      <Typography align="center" variant="h3" marginTop={4}> BIOGRAPHY </Typography>

      
      <Grid container spacing={2} marginTop={4}>
        {/* This is going to be where the text bio is */}
        <Grid item sx={2} md={4} lg={6} marginLeft={6}>
        <div className="bio-vertical-center"> 
        <Box className="bio-paragraph"> 
            <Typography align="center" variant="h5"> REAL ESTATE </Typography>
            <Typography > Starting in 2009 , my father and I began to flip real estate. In addition to my academic studies at FWPA, I had the opportunity to
              experience and help my family in a little venture called Greenville Properties LLC. Since then, I studied Real Estate and obtained a WA Real Estate Broker License.
              I am currently an Windermere REALTOR, aiming to incorporate the Zillow API with my real estate background.
            </Typography>
          </Box>
          <Box className="bio-paragraph"> 
            <Typography align="center" variant="h5"> CODING </Typography>
            <Typography > Junior Software Engineer with background in economics / statistics. 
              Recently certified in full-stsack development for Javascript, MongoDB, HTML, CSS, REACT.js and GraphQl. 
              Prioritizes UI design and end-user interactivity. Experienced with team projects for coding, especially in regards to meeting deadlines for assigned tasks. 
              Example projects include an calendar app to record and track nearby events, a project that uses Spotify API to display soundtracks and songs via search, and Historian, 
              a project that utilizes MERN stack and database queries to dynamically render and store historic events. 
              I am currently coding an application to streamline Warhammer 40k 9E Objective scoring via MERN and MUI. 
              I would love to share how my strengths and coding experiences would be of great benefit to your development team. 
            </Typography>
          </Box>
          <Box className="bio-paragraph"> 
            <Typography align="center" variant="h5"> HOBBIES </Typography>
            <Typography > Junior Software Engineer with background in economics / statistics. 
              Recently certified in full-stsack development for Javascript, MongoDB, HTML, CSS, REACT.js and GraphQl. 
              Prioritizes UI design and end-user interactivity. Experienced with team projects for coding, especially in regards to meeting deadlines for assigned tasks. 
              Example projects include an calendar app to record and track nearby events, a project that uses Spotify API to display soundtracks and songs via search, and Historian, 
              a project that utilizes MERN stack and database queries to dynamically render and store historic events. 
              I am currently coding an application to streamline Warhammer 40k 9E Objective scoring via MERN and MUI. 
              I would love to share how my strengths and coding experiences would be of great benefit to your development team. 
            </Typography>
          </Box>
        </div>
        </Grid>
        


        {/* This is where the card for the full length picture is going to be"*/}
        <Grid item xs={4} margin="auto">
          <Card item sx={2} md={4} lg={6}>
            <CardMedia
              component="img"
              height="100%"
              image="./assets/images/Bio-Picture.jpg"
              alt="A picture of myself, for the Biography page"
            />
          
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}