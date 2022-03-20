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
      },
    });

export default function Home() {
    return(
        
    <Box sx={{ flexGrow: 1 }}>
           <Grid container spacing={2}> 
      <Grid item sx={4} md={8} lg={12} >
    <Card >
       <CardMedia
        component="img"
        height="400"
        image="./assets/images/JasonMaBanner.jpg"
        alt="green iguana"
      /> 
      {/* <Image src="./assets/images/AssaultIntercessor.jpg" /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" margin="auto" align="center">
            JASON MA PORTFOLIO
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    </Grid>
          
      </Box>

        
);
}