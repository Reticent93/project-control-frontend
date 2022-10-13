import {  Typography } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from '@mui/material/styles';

const TableChart = () => {

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            fontSize: 18,
            // backgroundColor: '#e68191',
            color: '#81e6d6',
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 16,
            color: '#909090',
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            // backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    const theme = createTheme({
        palette: {
            primary: {
                main: '#909090',
            }
        }
    })

    const rows = [
        {id: 1, status: 'Paid', issuer: 'John Doe', total: 1000, paid: 1000, Due: 0, Date: '2022-11-10'},
        {id: 2, status: 'Paid', issuer: 'Joe Doe', total: 2000, paid: 2000, Due: 0, Date: '2022-11-11'},
        {id: 3, status: 'Paid', issuer: 'Jane Doe', total: 3000, paid: 3000, Due: 0, Date: '2022-11-12'},
        {id: 4, status: 'Paid', issuer: 'Jill Doe', total: 4000, paid: 4000, Due: 0, Date: '2022-11-13'},
        {id: 5, status: 'Paid', issuer: 'Jack Doe', total: 5000, paid: 5000, Due: 0, Date: '2022-11-14'},
        {id: 6, status: 'Paid', issuer: 'Jen Doe', total: 6000, paid: 6000, Due: 0, Date: '2022-11-15'},
        {id: 7, status: 'Paid', issuer: 'Ken Doe', total: 7000, paid: 7000, Due: 0, Date: '2022-11-16'},
        {id: 8, status: 'Paid', issuer: 'Jim Doe', total: 8000, paid: 8000, Due: 0, Date: '2022-11-17'},
        {id: 9, status: 'Paid', issuer: 'Allen Doe', total: 9000, paid: 9000, Due: 0, Date: '2022-11-18'},
        {id: 10, status: 'Paid', issuer: 'Jerry Doe', total: 10000, paid: 10000, Due: 0, Date: '2022-11-19'},
    ]


    return (
        <ThemeProvider theme={theme}>
        <TableContainer>
            <Table>
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell>ID</StyledTableCell>
                        <StyledTableCell>Status</StyledTableCell>
                        <StyledTableCell>Issuer</StyledTableCell>
                        <StyledTableCell>Total</StyledTableCell>
                        <StyledTableCell>Paid</StyledTableCell>
                        <StyledTableCell>Due</StyledTableCell>
                        <StyledTableCell>Date</StyledTableCell>
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                    <StyledTableRow key={row.id} color={'primary'}>
                        <StyledTableCell>{row.id}</StyledTableCell>
                        <StyledTableCell>{row.status}</StyledTableCell>
                        <StyledTableCell>{row.issuer}</StyledTableCell>
                        <StyledTableCell style={{color: '#e68191'}}>{row.total}</StyledTableCell>
                        <StyledTableCell style={{color: '#e68191'}}>{row.paid}</StyledTableCell>
                        <StyledTableCell>{row.Due}</StyledTableCell>
                        <StyledTableCell>{row.Date}</StyledTableCell>
                    </StyledTableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
        </ThemeProvider>
    );
}


export default TableChart;