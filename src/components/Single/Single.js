import {Box, Card, Container, Typography} from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";
import Grid2 from "@mui/material/Unstable_Grid2";
import Charts from "../Charts/Charts";
import TableChart from "../TableChart/TableChart";

const Single = () => {

    //Single needs to pull data from the database and display it in a table for this one user
    //The table will be from this one user
    //The bottom chart will show all orders from this user

    return (
        <Container disableGutters maxWidth={'false'} sx={{display: 'flex', margin: 0}}>
            <Sidebar />
            <Grid2 sx={{flex: 8,}} >
            <Box sx={{display: 'flex'}}>
                <Card sx={{ p: 2,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flex: 3,
                    m: 2,
                    boxShadow: '10px 10px 10px 10px lightgrey',
                    borderRadius: '10px',
                    height: 'auto',
                    bgcolor: '#194775', }}>
                    <Typography variant={'overline'} sx={{color: '#81e6d6'}}>Information</Typography>
                    <Typography variant={'h5'} sx={{color: '#909090'}}>Raleigh's Bikes</Typography>
                    <Typography variant={'h6'} sx={{color: '#909090'}}>Email: info@raleigh.com</Typography>
                    <Typography variant={'h6'} sx={{color: '#909090'}}>Phone: 1-800-555-5555</Typography>
                    <Typography variant={'h6'} sx={{color: '#909090'}}>Address: 1234 Main St. New York, NY 10001</Typography>
                </Card>
                    <Charts aspect={4} title={"Client Spending (Last 6 Months)"} />
            </Box>
                <Card sx={{display: 'flex',
                    p: 3,
                    gap: '20px',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    flex: 5,
                    m: 2,
                    boxShadow: '10px 10px 10px 10px lightgrey',
                    borderRadius: '10px',
                    height: 'auto',
                    bgcolor: '#194775',}}>
                      <TableChart />
                </Card>
            </Grid2>
        </Container>
    );
}


export default Single;