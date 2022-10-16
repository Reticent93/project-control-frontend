import { Box, Card, Container, Grid, ListItem, Typography } from "@mui/material";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import { DataGrid } from "@mui/x-data-grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid2 from "@mui/material/Unstable_Grid2";



const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'status', headerName: 'Status', width: 130 },
    { field: 'issuer', headerName: 'Issuer', width: 130 },
    { field: 'total', headerName: 'Total', width: 130 },
    { field: 'paid', headerName: 'Paid', width: 130 },
    { field: 'due', headerName: 'Due', width: 130 },
    { field: 'date', headerName: 'Date', width: 130 },

];

const rows = [
    { id: 1, status: 'Paid', issuer: 'Jon', total: '3,500.00', due: '3,000.00', date: '10-22-2022' },
    { id: 10, status: 'Pending', issuer: 'Jon', total: '3,500.00', due: '3,500.00', date: '10-22-2022' },
    { id: 12, status: 'Paid', issuer: 'Jon', total: '3,500.00', due: '3,500.00', date: '10-22-2022' },
    { id: 13, status: 'Paid', issuer: 'Jon', total: '3,500.00', due: '3,500.00', date: '10-22-2022' },
    { id: 14, status: 'Approved', issuer: 'Jon', total: '3,500.00', due: '3,500.00', date: '10-22-2022' },
    { id: 15, status: 'Paid', issuer: 'Jon', total: '3,500.00', due: '3,500.00', date: '10-22-2022' },
    { id: 16, status: 'Pending', issuer: 'Jon', total: '3,500.00', due: '3,500.00', date: '10-22-2022' },
    { id: 17, status: 'Paid', issuer: 'Jon', total: '3,500.00', due: '3,500.00', date: '10-22-2022' },
    { id: 11, status: 'Approved', issuer: 'Jon', total: '3,500.00', due: '3,500.00', date: '10-22-2022' },
    { id: 18, status: 'Paid', issuer: 'Jon', total: '3,500.00', due: '3,500.00', date: '10-22-2022' },
    { id: 19, status: 'Paid', issuer: 'Jon', total: '3,500.00', due: '3,500.00', date: '10-22-2022' },
    { id: 21, status: 'Pending', issuer: 'Jon', total: '3,500.00', due: '3,500.00', date: '10-22-2022' },
];


const List = () => {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#81e6d6',
                mode: 'dark',
            },
        },
    })

    return (
        <ThemeProvider theme={theme}>
        <Container  maxWidth={'false'} sx={{display: 'flex', width: '100%', height: '100vh',}}>
            <Sidebar />

                <Card sx={{height: '100vh',  width: '100%',  p:3 }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[50]}
                        checkboxSelection
                        sx={{height: '50vh' ,width: '100%',  bgcolor: '#194775', boxShadow: '10px 10px 10px 10px lightgrey', borderRadius: '10px',}}
                    />
                </Card>

        </Container>
            </ThemeProvider>
    );
}


export default List;