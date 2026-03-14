import { ProductModel } from "./product.model"

// structure of the API response
export interface OrderResponse{
  _id: string,
  cartId: string,
  user: string,
  status:string|null|undefined,
  totalCost:number,
  products:{
    product: ProductModel,
    qty:number,
    price:number
  }[]
}

// structure of API request
export interface OrderPayload{
  cartId: string,
  user: string,
  status:string|null|undefined,
  totalCost:number,
  products:{
    id:string,
    qty:number,
    price:number
  }[]
}
