import { Product } from "./Product"

export interface CartItemModel{
    UserName: string
    product: Product
    qnty: number
}