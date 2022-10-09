import { Container, TextField, Typography } from "@mui/material";


const List = () => {

    return (
        <Container>
            <Typography component="h1" variant="h5">
                List
            </Typography>
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
        </Container>
    );
}


export default List;