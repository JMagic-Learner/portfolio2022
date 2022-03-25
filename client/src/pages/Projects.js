import * as React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import { useQuery } from '@apollo/client';
import { QUERY_PROJECTS } from '../utils/queries';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function Projects() {

  const [project, setProject] = React.useState('');
  const { loading, data } = useQuery(QUERY_PROJECTS);
  if (loading) {
    console.log("we have queried the database for projects");
  }
  if (data) {
    console.log('We have found data from projects');
  }

  // Find projects array or return empty string.
  const ProjectsArray = data?.projects || [];
  console.log(ProjectsArray);
  console.log(JSON.stringify(ProjectsArray.name));
    return(

          <Box sx={{ flexGrow: 1 }}>
            <Typography sx={{ p: 2.0 }} variant="h2" align="center"> Projects</Typography>
            <Typography sx={{ p: 2.0 }} variant="h2" align="center"> Testing</Typography>
            <Grid container spacing={1}>

           
              <Grid item xs={8} sm={6} md={4} sx={{ m: 'auto' }}>
              {ProjectsArray.map((element) => {
                
              if(element) {
              console.log("element has been detected")
              }
              if(element.name) {
                console.log("A title for the project has been detected");
                console.log("The title is: " + element.name);
              }
              if(element.link) {
                console.log("A link for the project has been detected");
                console.log("The link to live is: " + element.link);
              }
              return(
               <Card>
                 <CardMedia
                        component="img"
                        height="300"
                        image={'./assets/images/' + element.name +'.jpg'}
                        alt="green iguana"
                  /> 
                 <CardContent>
                <Typography align="center" variant="h6"> {element.name} </Typography>
                <Typography > {element.description} </Typography>
                <Typography align="center" > Live Link: {element.link} </Typography>
                <Typography align="center" > Github: {element.github} </Typography>
                <Typography align="center" > Media: {element.media} </Typography>
                </CardContent>
                </Card>
              );
            
              })}
                
              </Grid> 
          
              
              
              
            </Grid> 
          
          </Box>
           
        );
      }
