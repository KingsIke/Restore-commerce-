export type IBasket = {
  basketId: string
  items: IBasketItem[]
}

export type IBasketItem = {
  productId: number
  name: string
  price: number
  quantity: number
  pictureUrl: string
  brand: string
  type: string
}