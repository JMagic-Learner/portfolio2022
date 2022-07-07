import * as React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Contact from "./Contact"
import Bio from "./Bio"
import Resume from "./Resume"
import Projects from "./Projects"
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
              <Grid item sx={8} md={12} lg={12} >
    <Card >
       <CardMedia
        component="img"
        height sx={8} md={12} lg={12}
        image="./assets/images/JasonMaBanner.jpg"
        alt="green iguana"
      /> 
      {/* <Image src="./assets/images/AssaultIntercessor.jpg" /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" margin="auto" align="center" sx={8} md={12} lg={12}>
            JASON MA PORTFOLIO
        </Typography>
      </CardContent>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" margin="auto" align="center">
            Welcome to my professional portfolio, REACT 2.0. You can go ahead and check out the the first
            rendition of this REACT portfolio via this link <a href="https://portfolio-jmagic.herokuapp.com/" class="downloadable" target="_blank" rel="noreferrer" margin="auto" >REACT Portfolio 1.0</a>
            Originally deployed on 8/30/2021, Portfolio V1 application utilizes Node Js, Express, Sequelize MySql, JAWSDB , Handlebars, Heroku and other dependencies. This current updated version is utilizes
            MERN, (MONGODB, EXPRESS, REACT, NODE.JS), taking full advantage of front-end and back end processes to display this application to you. 
        </Typography>
      </CardContent>
    </Card>
              </Grid>
              <Grid item sx={8} md={12} lg={12} >
                
                <Bio/>
                <Resume/>
                <Contact/>
                
              </Grid>
    </Grid>
          
      </Box>

        
);
}