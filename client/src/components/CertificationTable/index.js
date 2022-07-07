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

// createData defines columns.
function createData(Institution, Program, Certification, Year) {
  return { Institution, Program, Certification, Year };
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

// rows are self explanatory
const rows = [
  createData('Univeristy of Washington', "Economics", "B.A", 2016),
  createData('University of Washington', "UW Coding Bootcamp", 'Full-Stack Development', 2021),
  createData('Department of Licensing', "Real Estate License", "Broker License", 2021),
];

// This shows our table of Certifications
export default function CertificationTable() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8} sm={8} md={8} lg={8} sx={{ m: 'auto' }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow >
                  <StyledTableCell align="center">INSTITUTION</StyledTableCell>
                  <StyledTableCell align="center">PROGRAM</StyledTableCell>
                  <StyledTableCell align="center">CERTIFICATION</StyledTableCell>
                  <StyledTableCell align="center">YEAR</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.Institution}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <StyledTableCell align="center">{row.Institution}</StyledTableCell>
                    <StyledTableCell align="center">{row.Program}</StyledTableCell>
                    <StyledTableCell align="center">{row.Certification}</StyledTableCell>
                    <StyledTableCell align="center">{row.Year}</StyledTableCell>
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