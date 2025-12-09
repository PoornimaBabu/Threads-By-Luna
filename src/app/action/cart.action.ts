import { Product } from "../components/products/product.type"

export class AddItemToCart {
    static readonly type = '[Cart] Add Item To Cart'

    constructor(public readonly product: Product ){}
}