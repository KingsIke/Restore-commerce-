import { useEffect, useState } from "react";
import axios from 'axios';
import type { IProduct } from "../../app/model/product";
import ProductList from "./ProductList";

type CatalogProps = {
  products: IProduct[];
};

export const Catalog = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
  

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
  return (
      <>
      <ProductList products={products} />
     
    </>
  )
}