import type { IProduct } from "../../app/model/product";
import ProductList from "./ProductList";

type CatalogProps = {
  products: IProduct[];
};
export default function Catalog({products }:CatalogProps) {
  return (
    <>
      <ProductList products={products} />
     
    </>
  )
}