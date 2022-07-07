import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';

//Table Components
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

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
                    <StyledTableCell align="center"> CODING LANGUAGES</StyledTableCell>
                    <StyledTableCell align="center">FINANCE</StyledTableCell>
                    <StyledTableCell align="center">ADMINISTRATIVE</StyledTableCell>
                    <StyledTableCell align="center">REAL ESTATE</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.Institution}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <StyledTableCell align="center">{row.CODING}</StyledTableCell>
                      <StyledTableCell align="center">{row.FINANCE}</StyledTableCell>
                      <StyledTableCell align="center">{row.ADMINISTRATIVE}</StyledTableCell>
                      <StyledTableCell align="center">{row.REAL_ESTATE}</StyledTableCell>
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