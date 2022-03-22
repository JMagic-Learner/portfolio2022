import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';

//Table Components
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



// createData defines columns.
function createData(CODING, FINANCE, ADMINISTRATIVE, REAL_ESTATE) {
    return { CODING, FINANCE, ADMINISTRATIVE, REAL_ESTATE };
  }

// rows are self explanatory
  const rows = [
    createData('NODE.JS', "Economics", "Microsoft Suite", "Investment"),
    createData('EXPRESS', "Statistics", 'Production Pipeline Management', "Contracts"),
    createData('INQUIRER', "Econometrics", "Data Entry", "Mortgage Lending"),
    createData('MongoDB', "Data Analysis", "Training", "Comparitive Market Analysis"),
    createData('SQL', "Data Forecast", "", "REALTOR"),
    createData('Visual Studio', "", "", "Chattel Lending"),
    createData('Heroku', "", "", "HMDA Standards"),
    createData('GraphQL', "", "", "TRID"),
    createData('Bootstrap', "", "", "Regulation Z"),
    createData('CSS', "", "", "Equal Credit Opportunity Act"),
    createData('HTML', "", "", "Lending disclosures"),
    createData('JAVASCRIPT', "", "", ""),
    createData('MERN', "", "", ""),
    createData('ReactJS', "", "", ""),
  ];
export default function SkillsTable() {
    return(
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}> 
        <Grid item xs={8} sm={8} md={8} lg={8} sx={{ m: 'auto' }}>
        <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Coding Languages</TableCell>
                    <TableCell align="right">FINANCE</TableCell>
                    <TableCell align="right">ADMINISTRATIVE</TableCell>
                    <TableCell align="right">REAL_ESTATE</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.Institution}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">{row.CODING}</TableCell>
                      <TableCell align="right">{row.FINANCE}</TableCell>
                      <TableCell align="right">{row.ADMINISTRATIVE}</TableCell>
                      <TableCell align="right">{row.REAL_ESTATE}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            </Grid>
        
          
        
        </Grid>
        </Box>
    );
}