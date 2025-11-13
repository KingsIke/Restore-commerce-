import { Box } from "@mui/material";
import type { IProduct } from "../../app/model/product";
import { ProductCard } from "./ProductCard";

type ProductProps = {

  products: IProduct[];
};
export default function ProductList({products}:ProductProps) {
  return (
    <Box 
    sx={{display:"flex", flexWrap:"wrap", gap:3, justifyContent:"center"}}>
          {
        products?.map((product) => (
         <ProductCard key={product.id} product={product} />
        ))
      }
      </Box>
  )
}