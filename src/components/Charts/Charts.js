import { Box, Card, Typography } from "@mui/material";

const Charts = () => {

    return (
        <Card sx={{
            display: 'flex',
            p: 2,
            gap: '20px',
            justifyContent: 'space-between',
            flexGrow: 6,
            m: 2,
            boxShadow: '10px 10px 10px 10px lightgrey',
            borderRadius: '10px',
            height: '160px',
            bgcolor: '#194775',
        }}>
            <Typography variant={'h4'}>Charts</Typography>
        </Card>
    );
}


export default Charts;