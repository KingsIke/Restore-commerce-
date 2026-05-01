import { Box,  Button,  Paper } from '@mui/material';
// import { Form } from 'react-router-dom';
// import { CheckBox } from '@mui/icons-material';
import { Search } from './Search';
import { useAppDispatch, useAppSelector } from '../../app/store/store';
import { RadioButtonGroup } from '../../shared/component/RadioButtonGroup';
import { resetParams, setBrands, setOrderBy, setTypes } from './catalogSlice';
import { CheckboxButtons } from '../../shared/component/CheckboxButtons';

const sortOptions = [
  { value: 'name', label: 'Alphabetical' },
  { value: 'price', label: 'Price: Low to High' },
  { value: 'priceDesc', label: 'Price: High to Low' },
];
type FiltersProps = {
    filtersData: {
    brands: string[];
    types: string[];
    }
};


export const Filters = ({ filtersData:data }: FiltersProps) => {
  const {orderBy, brands, types} = useAppSelector(state => state.catalog);
  const dispatch = useAppDispatch();



//   if (isLoading) {
//         return (
//          <Grid
//           container
//           justifyContent="center"
//           alignItems="center"
//           style={{ height: "80vh" }}
        
//     >
//           <Loading 
//             src = {icon}
//             size = {100}
//             borderSize = {5}
//             borderColor = "#1976d2"
//           />   
//            <Typography variant="h4" sx={{mt:2}}>Loading product details...</Typography>  
//           </Grid>
            
//           );
//   }


  return (
    <Box display="flex" flexDirection="column" gap={2}>
  <Paper>
    <Search />
  </Paper>
<Paper sx={{p:3}}>
   <RadioButtonGroup
    options={sortOptions}
    selectedValue={orderBy}
    onChange={(event) => dispatch(setOrderBy(event.target.value))}
   />
</Paper>
<Paper sx={{p:3}}>  
    <CheckboxButtons
        items={data.brands || []}
        checked={brands}
        onChange={(items: string[]) => dispatch(setBrands(items))}
    />
</Paper>
<Paper sx={{p:3}}>  
    <CheckboxButtons
        items={data?.types || []}
        checked={types}
        onChange={(items: string[]) => dispatch(setTypes(items))}
    />
</Paper>
<Button onClick={() =>{
    dispatch(resetParams())
}}
>
    Reset Filters
</Button>

    </Box>
  )
}
