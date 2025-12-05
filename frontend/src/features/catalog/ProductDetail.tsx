import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { IProduct } from "../../app/model/product";
import axios from 'axios';
import { Button, Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@mui/material";
import { useGetProductByIdQuery } from "./catalogApi";
import { Loading } from "../loader/Loading";
import icon from "../../assets/icon.ico";



export const ProductDetail = () => {
  const {id} = useParams();

 /* const [product, setProduct] = useState<IProduct | null>(null);

   useEffect(() => {
        axios.get(`http://localhost:3050/api/products/${id}`)
          .then(response => {
            console.log('Axios response:', response);
            setProduct(response.data);
          })
          .catch(error => {
            console.error('Product Detail Axios error:', error);
          });
      }, [id]);
*/
      const {data: product, isLoading} = useGetProductByIdQuery(Number(id));

      if (!product || isLoading) 
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
       <Typography variant="h4" sx={{mt:2}}>Loading product details...</Typography>  
      </Grid>
        
      );


    const productDetails = [
      { label: 'Name', value: product.name },
      { label: 'Description', value: product.description },
      { label: 'Type', value: product.type },
      { label: 'Brand', value: product.brand },
      { label: 'Quantity in Stock', value: product.quantityInStock.toString() },



      //{ label: 'Price', value: `$${(product.price / 100).toFixed(2)}` },
      // Add more product details as needed
    ];  
  return (
    <Grid container spacing={6} maxWidth={'lg'} sx={{mx: 'auto'}}>
      <Grid size={6}>
        <img 
        src={product?.pictureUrl} 
        alt={product?.name} 
        style={{width: '100%'}}
        />
      </Grid>
      <Grid size={6}>
        <Typography>{product?.name}</Typography>
        <Divider sx={{mb: 2}} />
        <Typography variant="h4" color="secondary">${product ? (product.price / 100).toFixed(2) : ''}</Typography>
      <TableContainer >
        <Table sx={{
          "& td": {fontSize:"1rem"}
        }}>
          <TableBody>
            {productDetails.map((detail, index) => (
              <TableRow key={index}>
                <TableCell sx={{fontWeight: "bold"}}>{detail.label}</TableCell>
                <TableCell>{detail.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>  
        </Table>
      </TableContainer>

      <Grid container spacing={2} marginTop={3}>
        <Grid size={6}>
          <TextField
            label="Quantity in Cart"
            variant="outlined"
            type="number"
            fullWidth
            defaultValue={1}
          />
        </Grid>
    
        <Grid
          size={6}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              sx={{height: "55px"}}
            >
              Add to Cart
            </Button>
          </Grid>
      </Grid>
        <p>{product?.description}</p>
      </Grid>
    </Grid>
  )
}