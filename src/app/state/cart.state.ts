import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Product } from "../components/products/product.type";
import { AddItemToCart } from "../action/cart.action";
import { Injectable } from "@angular/core";

interface CartModel {
    total_products: number;
    products: Product[]
}

@Injectable()
@State<CartModel> ({
    name: 'cart',
    defaults: {
        total_products: 0,
        products: []
    }
})

export class CartState {
    @Action(AddItemToCart)
    addItemToCart(ctx: StateContext<CartModel>, action: AddItemToCart){
           const state = ctx.getState();
           const totalValue = state.products;
           ctx.setState({
            ...state,
            total_products: state.total_products + 1,
            products: [...state.products, action.product]
           })
    }

    @Selector()
    static cartTotal(cart: CartModel): number {
        return cart.products.reduce((sum, product) => sum + product.price, 0);
    }
}