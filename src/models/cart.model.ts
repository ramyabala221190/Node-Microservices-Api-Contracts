export interface CartPayload{
   products:{productId:string,qty:number}[],
   user: string
}

export interface CartResponse{
  _id:string,
    products:{productId:string,qty:number}[],
    user: string
}
