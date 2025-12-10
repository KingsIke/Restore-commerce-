import {
    Container, Typography, Button, ButtonGroup,
    Alert,
    List,
    ListItem
} from "@mui/material"
import { useLazyGet400ErrorQuery, useLazyGet401ErrorQuery, useLazyGet404ErrorQuery, useLazyGet500ErrorQuery, useLazyGetValidationErrorQuery } from "../errorsPage/errorApi"
import { isValidationError } from "../middleware/Validation";

export const ErrorPage = () => {
    const [trigger400Error] = useLazyGet400ErrorQuery();
    const [trigger401Error] = useLazyGet401ErrorQuery();
    const [trigger404Error] = useLazyGet404ErrorQuery();
    const [trigger500Error] = useLazyGet500ErrorQuery();
    const [triggerValidationError,  { error }] = useLazyGetValidationErrorQuery();


      let validationMessages: string[] = [];

  if (error && "data" in error) {
    const data = error.data;

    if (isValidationError(data)) {
      validationMessages = Object.values(data.errors).flat();
    }
  }
    return (
        <Container maxWidth='lg'>
            <Typography gutterBottom variant="h3">
                Errors for testing
            </Typography>
            <ButtonGroup fullWidth sx={{ mb: 4 }}>
                <Button variant='contained' onClick={() => trigger400Error().catch(err => console.log(err))}>
                    Test 400 Error
                </Button>
                <Button variant='contained' onClick={() => trigger401Error().catch(err => console.log(err))}>
                    Test 401 Error
                </Button>
                <Button variant='contained' onClick={() => trigger404Error().catch(err => console.log(err))}>
                    Test 404 Error
                </Button>
                <Button variant='contained' onClick={() => triggerValidationError().catch(err => console.log(err))}>
                    Test Validation Error
                </Button>
                <Button variant='contained' onClick={() => trigger500Error().catch(err => console.log(err))}>
                    Test 500 Error
                </Button>
               
            </ButtonGroup>
              {validationMessages.length > 0 && (
        <Alert severity="error" sx={{ mt: 3 }}>
          <List>
            {validationMessages.map((msg, idx) => (
              <ListItem key={idx} sx={{ py: 0 }}>
                {msg}
              </ListItem>
            ))}
          </List>
        </Alert>
      )}
        </Container>
    )
}