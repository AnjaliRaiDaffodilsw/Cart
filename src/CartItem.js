import React from 'react'

const CartItem = (props) => {
    //     // constructor() {
    //     //     super()
    //     //     this.state = {
    //     //         price: 999,
    //     //         title: 'Phone',
    //     //         qty: 1,
    //     //         img: ''
    //     //     }
    //     //     // this.testing();
    //     // }

    //     // testing() {
    //     //     const promise = new Promise((resolve,reject) => {
    //     //         setTimeout(() => {
    //     //             resolve('done');
    //     //         }, 5000);
    //     //     })

    //     //     promise.then( () => {
    //     //         //setState acts like a synchronous call
    //     //         // this.setState({qty : 100});
    //     //         this.setState({qty : this.state.qty + 10});


    //     //         console.log('state',this.state);
    //     //     })
    //     // }
    // //alternative to this
    // // onClick = {this.increaseQuantity.bind(this)}
    //     increaseQuantity = () => {
    //       //set state form 1
    //       //React does Batching for all the event handler no matter how many timees you call set state - componenets will render only once
    //         // this.setState({
    //         //     qty : this.state.qty + 1

    //         // });

    //          //set state form 2 - if preious state required use this 
    //         //set state call is asynch
    //          //it will maintain queue because of callback
    //          this.setState((prevState) => {
    //             return {
    //                 qty : prevState.qty + 1
    //             }
    //         });
    //     }

    //     decreaseQuantity = () => {
    //         const { qty } = this.state;
    //         if(qty == 0) {
    //             return;
    //         }
    //         this.setState((prevState) => {
    //             return {
    //                 qty : prevState.qty - 1
    //             }
    //         });
    //     }

    //     deleteQuantity = () => {
    //         this.setState({
    //                 qty : 0,
    //                 price : 0,
    //                 title : 'Empty'
    //             });
    //     }
    const { price, title, qty } = props.product;
    const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } = props;
    return (
        <div className="cart-item" >
            {/* {this.props.jsx} */}
            <div className="left-block">
                <img
                    style={styles.image} />
            </div>
            <div className="right-block">
                <div style={{
                    fontSize: 25
                }}
                >{title}</div>
                <div style={{
                    color: '#777'
                }}>Rs {price}</div>
                <div
                    style={{
                        color: '#777'
                    }}
                >Qty : {qty}</div>
                <div className="cart-item-actions">
                    {/* {Buttons} */}
                    <img
                        alt="increase"
                        className="acion-icons"
                        src="https://as2.ftcdn.net/jpg/01/07/62/07/500_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg"
                        style={styless.image}
                        onClick={() => onIncreaseQuantity(product)}

                    />
                    <img
                        alt="decrease"
                        className="acion-icons"
                        style={styless.image}
                        src="https://as1.ftcdn.net/jpg/03/73/49/86/500_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"
                        onClick={() => onDecreaseQuantity(product)}
                    />
                    <img
                        alt="delete"
                        className="acion-icons"
                        style={styless.image}
                        src="https://as2.ftcdn.net/jpg/00/98/26/11/500_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg"
                        // onClick={this.deleteQuantity}
                        onClick={() => onDeleteProduct(product.id)}
                    />
                </div>
            </div>

        </div>
    )
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}
const styless = {
    image: {
        height: 30,
        width: 30,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;