import { SearchOff } from "@mui/icons-material"
import { Button, Paper, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export const Error404 = ()=> {
    return (
        <Paper sx={{
            p:4,
            height:400,
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center'
        }}>
            <SearchOff color="primary" sx={{fontSize:80}} />
            <Typography variant="h3" color="primary" gutterBottom>
                Oops - We could not find what you are looking for
            </Typography>
            <Button  fullWidth component={Link} to='/catalog' variant="contained" >
            Go back to shop
            </Button>
            </Paper>
    )
}