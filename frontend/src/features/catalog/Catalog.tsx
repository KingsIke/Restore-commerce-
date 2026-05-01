// import { useEffect, useState } from "react";
// import axios from 'axios';
// import type { IProduct } from "../../app/model/product";
import ProductList from "./ProductList";
import { useGetFiltersQuery, useGetProductsQuery } from "./catalogApi";
import { Loading } from "../loader/Loading";
import icon from "../../assets/icon.ico";
import { Grid, Typography } from "@mui/material";
import { Filters } from "./Filters";
import { useAppDispatch, useAppSelector } from "../../app/store/store";
// import App from "../../app/layout/App";
import { AppPagination } from "../../shared/component/AppPagination";
import { setPageNumber } from "./catalogSlice";






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

    const productParams = useAppSelector(state => state.catalog)
    const {data, isLoading} = useGetProductsQuery(productParams);
    const{data :filtersData, isLoading: filtersLoading} = useGetFiltersQuery();
    const dispatch = useAppDispatch();
    if(isLoading || !data || filtersLoading || !filtersData) 
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
      <Grid container spacing={4}>
        <Grid size={3}>
          <Filters filtersData={filtersData} />
        </Grid>
        <Grid size={9}>
          {data.items && data.items.length >0 ? (
            <>
             <ProductList products={data.items} />
      <AppPagination
        metadata={data.pagination}
        onPageChange={(page:number)=>{ dispatch(setPageNumber(page))
          window.scrollTo({top:0, behavior:"smooth"})

        }}
      />
            </>
            ):(
              <Typography variant="h5">No Item found for this filter</Typography>
            )}
     
        </Grid>
     
    </Grid>
  )
}