import { useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT, type CounterState } from "./counterReducer";
import { Button, ButtonGroup, Typography } from "@mui/material";

export const ContagePage = () => {
  const data = useSelector((state: CounterState) => state.data);
  const dispatch = useDispatch()
  console.log("Contage Page Rendered with data:", data);
  return (
    <><Typography variant="h2">Contage Page Data</Typography>
    <Typography variant="h4">{data}</Typography>
    <ButtonGroup>
      <Button onClick={() => dispatch(DECREMENT()) }
      color= "error">
        Decrement

      </Button>
      <Button onClick={() => dispatch(INCREMENT()) }
      color= "secondary">
        Increment

      </Button>
      <Button onClick={() => dispatch(INCREMENT(5)) }
      color= "secondary">
        Increment by 5

      </Button>
    </ButtonGroup>


    </>
  )
}