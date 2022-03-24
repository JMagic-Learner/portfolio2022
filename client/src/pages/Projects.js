import * as React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useQuery } from '@apollo/client';
import { QUERY_PROJECTS } from '../utils/queries';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const livelink = "";

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
            <Grid container spacing={2}>

           
              <Grid item xs={12} sm={6} md={8} sx={{ m: 'auto' }}>
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
                livelink = '"'+ element.link +'"';
              }
              return(
                <Item>
                <Typography> {element.name} </Typography>
                <Typography> {element.description} </Typography>
                <Typography> <a href={livelink} target="_blank" rel="noreferrer" margin="auto" > {element.link} </a> </Typography>
                <Typography> {element.github} </Typography>
                <Typography> {element.media} </Typography>
                </Item>
              );
            
              })}
                
              </Grid> 
          
              
              
              
            </Grid> 
          
          </Box>
           
        );
      }
