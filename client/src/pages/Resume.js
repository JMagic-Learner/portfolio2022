import * as React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import CertificationTable from '../components/CertificationTable';
import SkillsTable from '../components/SkillsTable';
import ColorsTimeline from '../components/Timeline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Download from "../components/Download";


export default function Resume() {

return (
    <Box sx={{ flexGrow: 1 }}>

<Typography align="center" variant="h2" marginTop="1%"> RESUME </Typography>
<Download />

<Grid container spacing={2} margin="auto"> 
<Grid item xs={8} sm={8} md={8} lg={10} sx={{ m: 'auto' }}>
<Card>
  <CardContent align="center">
  {/* process.env.PUBLIC_URL */}
<Button size="small"  sx={{ mx: "auto" }} ><Typography align="center"><a href={ process.env.PUBLIC_URL + "./assets/download/JASON_MA_RESUME.PDF"} download="JASON_MA_RESUME.PDF">CLICK TO DOWNLOAD RESUME</a></Typography></Button>
</CardContent>
</Card>
<Typography align="center" variant="h8" margin="auto"> 
Recently certified in full-stack development for Javascript, MongoDB, HTML, CSS, REACT.js and GraphQl. 
Prioritizes UI design and end-user interactivity. Experienced with team projects for coding. 
Example projects include a calendar app to record and track nearby events, a project that uses Spotify API to display soundtracks and songs via search, and Historian, a project that utilizes MERN stack and database queries to dynamically render and store historic events. 
Currently coding an application to streamline Warhammer 40k 9E Objective scoring via MERN and MUI. 
Looking to incorporate Real Estate/Mortgage data for coding applications.
</Typography>
</Grid>
<Grid item xs={10} sm={10} md={10} lg={10} sx={{ m: 'auto' }} >
<CertificationTable align="center" margin="auto"/>
</Grid>
<Grid item xs={10} sm={10} md={10} lg={10} sx={{ m: 'auto' }}>
<SkillsTable />
</Grid>
<Grid item xs={8} sm={8} md={8} lg={10} sx={{ m: 'auto' }}>
                <ColorsTimeline />
            </Grid>
            </Grid>
</Box>
);
}