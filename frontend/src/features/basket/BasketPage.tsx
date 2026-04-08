import React from 'react'
import { useGetBasketQuery } from './basketApi';
import { Grid, Typography } from '@mui/material';
import icon from "../../assets/icon.ico";
import { Loading } from '../loader/Loading';
import { BasketItem } from './BasketItem';
import { OrderSummary } from '../../shared/component/OrderSummary';


export const BasketPage = () => {
    const {data, isLoading} = useGetBasketQuery();
    if(isLoading)      return (
     <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "80vh" }}
    
>
      <Loading 
        src = {icon}
        size = {100}
        borderSize = {5}
        borderColor = "#1976d2"
      />   
       <Typography variant="h4" sx={{mt:2}}>Loading Basket...</Typography>  
      </Grid>
        
      );

      if(!data || data.items.length === 0) return <Typography variant="h3" sx={{mt:2}}>Your basket is empty</Typography>
  return (
   <Grid container spacing={2}>
      <Grid size={8}>
        {data.items.map(item=>(
          <BasketItem item={item} key={item.productId} />
        ))}
      </Grid>
      <Grid size={4}>
        <OrderSummary />
      </Grid>
   </Grid>
  )
}
