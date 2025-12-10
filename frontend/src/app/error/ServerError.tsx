import { Container, Divider, Paper, Typography } from "@mui/material"
import { useLocation } from "react-router-dom"

export const ServerError = () => {
    const {state} = useLocation();
  return (
    <Paper>
        {
            state.error ? (
                <>
                    <Typography variant="h2" color="secondary" gutterBottom sx={{px:4, pt:2}} >
                        {state.error.title}
                        </Typography>
                        <Divider />

                        <Typography variant="h5" color="secondary" sx={{px:4, py:2}}>
                            {state.error.detail || 'Internal server error'}
                        </Typography>
                </>
            ):(
            <Container component={Paper}>
        <Typography variant="h5" color="error" gutterBottom>
            Server Error
        </Typography>
        <Typography>
            An unexpected error occurred. Please try again later or contact support if the problem persists.
        </Typography>
    </Container>
            )}
     </Paper>
  )
}