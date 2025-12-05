/*import { useDispatch, useSelector } from "react-redux";*/
import { decrement, DECREMENT, increment, INCREMENT, type CounterState } from "./counterReducer";
import { Button, ButtonGroup, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/store/store";

export const ContagePage = () => {
  /*
  const data = useSelector((state: CounterState) => state.data);
  const dispatch = useDispatch()
  */
 const data = useAppSelector((state) => state.counter.data);
 const dispatch =useAppDispatch();
  console.log("Contage Page Rendered with data:", data);
  return (
    <>
    <Typography variant="h2">Contage Page Data</Typography>
    <Typography variant="h4">{data}</Typography>
    <ButtonGroup>
      {/*
      <Button onClick={() => dispatch(DECREMENT()) }
      color= "error">
        Decrement

      </Button>
      <Button onClick={() => dispatch(INCREMENT()) }
      color= "secondary">
        Increment

      </Button>
      */}
      <Button onClick={() => dispatch(decrement(1)) }
      color= "error">
        Decrement

      </Button>
      <Button onClick={() => dispatch(increment(1)) }
      color= "secondary">
        Increment

      </Button>
       {/*
      <Button onClick={() => dispatch(INCREMENT(5)) }
      color= "secondary">
        Increment by 5

      </Button>
            */}
    </ButtonGroup>


    </>
  )
}