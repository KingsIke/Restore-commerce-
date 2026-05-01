import {Grid } from "@mui/material";
import type { IProduct } from "../../app/model/product";
import { ProductCard } from "./ProductCard";

type ProductProps = {

  products: IProduct[];
};
export default function ProductList({products}:ProductProps) {
  return (
    // <Box 
    // sx={{display:"flex", flexWrap:"wrap", gap:3, justifyContent:"center"}}>
    <Grid container spacing={3}>
 {
        products?.map((product) => (
          <Grid size={3} key={product.id} display='flex'>
         <ProductCard product={product} />
          </Grid>
        ))
      }

    </Grid>      
   
      // </Box>
  )
}