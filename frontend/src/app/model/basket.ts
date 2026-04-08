import type { IProduct } from "./product"

export type IBasket = {
  basketId: string
  items: IBasketItem[]
}

export class IBasketItem  {
  productId: number;
  name: string;
  price: number;
  quantity: number;
  pictureUrl: string;
  brand: string;
  type: string;
  constructor( product:IProduct, quantity: number) {
    this.productId = product.id;
    this.name = product.name;
    this.price = product.price;
    this.quantity = quantity;
    this.pictureUrl = product.pictureUrl; 
    this.brand = product.brand;
    this.type = product.type;
  }

}