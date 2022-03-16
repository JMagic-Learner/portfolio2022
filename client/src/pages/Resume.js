import * as React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';

//Table Components
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import ColorsTimeline from '../components/Timeline';

// createData defines columns.
function createData(Institution, Program, Certification, Year) {
    return { Institution, Program, Certification, Year };
  }

// rows are self explanatory
  const rows = [
    createData('Univeristy of Washington', "Economics", "B.A", 2016),
    createData('University of Washington', "UW Coding Bootcamp", 'Full-Stack Development', 2021),
    createData('Department of Licensing', "Real Estate License", "Broker License", 2021),
  ];

export default function Resume() {

return (
    <Box sx={{ flexGrow: 1 }}>

<Typography align="center" variant="h2" marginTop="1%"> RESUME </Typography>
<Button size="small" align="center" sx={{ mx: "auto" }} ><a href="/assets/download/JASON_MA_RESUME.PDF" download="Jason_Ma_Resume.PDF" margin="auto" align="center">CLICK TO DOWNLOAD RESUME</a></Button>
<Grid container spacing={2}> 
<Grid item xs={12} sm={6} md={8} lg={10} sx={{ m: 'auto' }}>
<Typography align="center" variant="h6"> 
Recently certified in full-stack development for Javascript, MongoDB, HTML, CSS, REACT.js and GraphQl. 
Prioritizes UI design and end-user interactivity. Experienced with team projects for coding. 
Example projects include a calendar app to record and track nearby events, a project that uses Spotify API to display soundtracks and songs via search, and Historian, a project that utilizes MERN stack and database queries to dynamically render and store historic events. 
Currently coding an application to streamline Warhammer 40k 9E Objective scoring via MERN and MUI. 
Looking to incorporate Real Estate/Mortgage data for coding applications.
</Typography>
</Grid>
<Grid item xs={8} sm={8} md={8} lg={8} sx={{ m: 'auto' }}>
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Institution</TableCell>
            <TableCell align="right">Program</TableCell>
            <TableCell align="right">Certification</TableCell>
            <TableCell align="right">Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Institution}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.Institution}</TableCell>
              <TableCell align="right">{row.Program}</TableCell>
              <TableCell align="right">{row.Certification}</TableCell>
              <TableCell align="right">{row.Year}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>

    <Grid item xs={10} sm={4} md={6} lg={8} sx={{ m: 'auto' }}>
        <ColorsTimeline />
    </Grid>

</Grid>

</Box>
);
}