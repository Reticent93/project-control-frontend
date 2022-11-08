import Sidebar from "../Sidebar/Sidebar";
import { Card, Container, Input, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Button from "@mui/material/Button";

const New = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#81e6d6',
            },

        },
    });

    return (
        <ThemeProvider theme={theme}>
        <Container disableGutters maxWidth={'false'} sx={{display: 'flex', margin: 0}}>
            <Sidebar/>
            <Grid2 sx={{flex: 8, height: '100vh' }}>
            <Card sx={{ p: 2,
                gap: '20px',
                justifyContent: 'space-between',
                flex: 2,
                m: 2,
                boxShadow: '10px 10px 10px 10px lightgrey',
                borderRadius: '10px',
                // height: 'auto',
                bgcolor: '#194775',}}>
                <Typography sx={{fontSize: 20, color: '#909090'}} component="h1" gutterBottom>
                    Add New Order
                </Typography>
            </Card>

            <Grid2 sx={{flex: 8, height: '100vh'}}>
                <Card sx={{ p: 2,
                    display: 'flex',
                    gap: '20px',
                    justifyContent: 'space-between',
                    flex: 2,
                    m: 2,
                    boxShadow: '10px 10px 10px 10px lightgrey',
                    borderRadius: '10px',
                    height: 'auto',
                    bgcolor: '#194775',
                    color: '#909090'}}>
                        <Grid2 sx={{width: '100%', height: '500px', display: 'flex', flexWrap: 'wrap', gap: 10, p: 2, m: 2}}>
                        <Input
                            sx={{width: '40%', color: '#909090'}}
                            placeholder="Company Name"

                            inputProps={{ 'aria-label': 'description' }}
                            variant="standard"
                        />
                        <Input
                            sx={{width: '40%',   color: '#909090'}}
                            placeholder="Street Address"
                            inputProps={{ 'aria-label': 'description' }}
                            variant="standard"
                        />
                        <Input
                            sx={{width: '40%',   color: '#909090'}}
                            placeholder="City"
                            inputProps={{ 'aria-label': 'description' }}
                            variant="standard"
                        />
                        <Input
                            sx={{width: '40%',   color: '#909090'}}
                            placeholder="State"
                            inputProps={{ 'aria-label': 'description' }}
                            variant="standard"
                        />
                        <Input
                            sx={{width: '40%',   color: '#909090'}}
                            placeholder="Zip Code"
                            inputProps={{ 'aria-label': 'description' }}
                            variant="standard"
                        />
                        <Input
                            sx={{width: '40%',   color: '#909090'}}
                            placeholder="Phone Number"
                            inputProps={{ 'aria-label': 'description' }}
                            variant="standard"
                        />
                        <Input
                            sx={{width: '40%', color: '#909090'}}
                            placeholder="Email"
                            inputProps={{ 'aria-label': 'description' }}
                            variant="standard"
                        />
                    <Button sx={{width: '20%', height: '35px', bgcolor: '#e68191', color: '#81e6d6', borderRadius: '10px', fontSize: 20, fontWeight: 'bold'}}variant={'contained'}>Add New Order</Button>
                        </Grid2>
                </Card>
            </Grid2>
            </Grid2>
        </Container>
        </ThemeProvider>
    );
}


export default New;