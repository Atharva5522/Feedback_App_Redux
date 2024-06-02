import { AppBar, Toolbar, Typography } from "@mui/material"

const Navbar = () => {
    return (
        <AppBar position="static" color="error">

        <Toolbar >
            <Typography variant="h4">Feedback App</Typography>
        </Toolbar>

        </AppBar>
    )
}
export default Navbar