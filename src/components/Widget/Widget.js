import { Button, Card, Grid, Link, Paper, TextField, Box, Container, List } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green } from "@mui/material/colors";


const Widget = () => {
    const theme = createTheme({
        palette: {
            main: green[400]
        },
        spacing: 8,
    })

    return (
        <ThemeProvider theme={theme}>
        <Card sx={{ display: 'flex', flex: 1, p:2, gap: '20px', }}>
            <List sx={{ display: 'flex', p:3, justifyContent: 'space-between'}} >left</List>
            <List sx={{ display: 'flex', p:3, justifyContent: 'space-between'}}>right</List>
        </Card>

        </ThemeProvider>
    );
}


export default Widget;