import { Card, Container, Grid, Typography, } from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";
import Box from "@mui/material/Box";
import Widget from "../Widget/Widget";
import Featured from "../Featured/Featured";
import Charts from "../Charts/Charts";
import TableChart from "../TableChart/TableChart";


const Home = () => {


    return (

        <Container disableGutters maxWidth={'false'} sx={{display: 'flex', margin: 0}}>
            <Sidebar maxWidth={'sm'}/>
            <Grid sx={{flex: 8,}} >
                <Box sx={{display: 'flex'}}>
                    <Widget type={'invoices'}/>
                    <Widget type={'orders'}/>
                    <Widget type={'inventory'}/>
                    <Widget type={'suppliers'}/>
                </Box>
                <Box sx={{display: 'flex'}}>
                    <Featured sx={{flex: 8}} />
                    <Charts sx={{flex: 8}} title={"Last 6 Months"} aspect={4 } />
                </Box>
                <Grid sx={{flex: 8}}>
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
                    <Typography variant={'h6'} sx={{color: '#909090'}}>List of Invoices</Typography>
                        <TableChart />
                    </Card>
                </Grid>
            </Grid>
        </Container>

    )
        ;
}


export default Home;