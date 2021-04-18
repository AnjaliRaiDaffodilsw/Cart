import React, { Component } from 'react'
import CartItem from './CartItem';

class Cart extends Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    price: 99,
                    title: 'Watch',
                    qty: 1,
                    img: '',
                    id: 1
                },
                {
                    price: 999,
                    title: 'Mobile Phone',
                    qty: 10,
                    img: '',
                    id: 2
                },
                {
                    price: 999,
                    title: 'Laptop',
                    qty: 4,
                    img: '',
                    id: 3
                },
            ]
        }
    }
    render() {
        const { products } = this.state;
        // const arr = [1,2,3,4,5];
        return (
            //arr.map will iterate over the array and gives a new list of array

            // <div className = "cart">
            //     { arr.map((item) => {
            //         return item + 5; 
            //     })}
            // </div>
            <div className="cart">
                {products.map((product) => {
                    return <CartItem
                        product={product}
                        key={product.id} 
                        component = {<CartItem /> }/>
                })}

            </div>
        )
    }
}

export default Cart;