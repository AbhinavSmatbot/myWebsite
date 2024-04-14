import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../About/About.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Name -','Abhinav Kumar Pandey'),
  createData('Designation -', "Software Engineer(Developer)"),
  createData('Education Level -', "MCA,BCA,BSW,DCA"),
  createData('Mobile -', "9425939732"),
  createData('Email -', "Abhinav.smatbot@gmail.com"),
  createData('DOM -', "05-09-1996"),
  createData('Sex -', "Male"),
  createData('Marital status -', "Unmarried"),
  createData('Father Name -', "Krishnamani Prasad pandey"),
  createData('Mother Name -', "Anuradha pandey"),
  createData('Father Occupation -', "Teacher"),
  createData('Sibling -', "One Big Brother and One Younger Sister"),
  createData('Languages -', "Hindi,English,Telugu"),
  createData('Current City -', "Hyderabad"),
];

export default function Profile() {
  return (
    <TableContainer component={Paper} style={{width:'500px',alignItems:"center",margin:'100px auto', }} className='mono'>
      <Table sx={{ minWidth: 500,maxWidth:500 }} aria-label="customized table">
        <TableHead>
          <TableRow className='mono'>
            <StyledTableCell className='mono'>Abhinav</StyledTableCell>
            <StyledTableCell align="right" className='mono'>Pandey</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody className='mono'>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" className='mono'>
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right" className='mono'>{row.calories}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
