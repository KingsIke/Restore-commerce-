import { useEffect, useState } from "react";
import axios from 'axios';
import type { IProduct } from "../../app/model/product";
import ProductList from "./ProductList";
import { useGetProductsQuery } from "./catalogApi";
import { Loading } from "../loader/Loading";
import icon from "../../assets/icon.ico";
import { Grid, Typography } from "@mui/material";






export const Catalog = () => {

  // ....   Normal axios fetching code........
   {/* const [products, setProducts] = useState<IProduct[]>([]);
  

    useEffect(() => {
      axios.get('http://localhost:3050/api/products')
        .then(response => {
          console.log('Axios response:', response);
          setProducts(response.data);
        })
        .catch(error => {
          console.error('Axios error:', error);
        });
    }, []);
    */}
    //..... Redux Toolkit Query fetching code.......

    const {data, isLoading} = useGetProductsQuery();

    if(isLoading || !data) 
    return (
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
      <Typography variant="h4" sx={{mt:2}}>Loading products...</Typography>
      </Grid>
      )
  return (
      <>
      <ProductList products={data} />
     
    </>
  )
}