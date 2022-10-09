import { useRef, useState } from "react";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import Paper from '@mui/material/Paper';
import {
    Avatar,
    Box,
    Checkbox,
    CssBaseline,
    FormControl,
    FormControlLabel,
    FormGroup,
    Grid,
    Link,
    Stack,
    Typography
} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Button } from '@mui/material';
import { Input } from '@mui/material';
import { Container } from '@mui/material'
import { TextField } from "@mui/material";
import { green } from "@mui/material/colors";


const Login = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: green[400],
            },
            secondary: {
                main: green[600],
            }
        },
        spacing: 0
    });


    const userRef = useRef();
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {}

    return (
        <>
            <Paper elevation={3} md={12}>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: green[500] }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/Signup" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>

                </Container>
            </ThemeProvider>
            </Paper>
        </>
    );
}

export default Login;