import React from 'react'
import CartItem from './CartItem';

const Cart = (props) => {

    const { products } = props;
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
                    // component = {<CartItem /> }
                    onIncreaseQuantity={props.onIncreaseQuantity}
                    onDecreaseQuantity={props.onDecreaseQuantity}
                    onDeleteProduct={props.onDeleteProduct}
                />
            })}

        </div>
    )

}

export default Cart;