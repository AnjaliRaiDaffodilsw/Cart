import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/app';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      //used firebase fro fetching data;
      products: [],
      loading : true
      // {
      //   price: 99,
      //   title: 'Watch',
      //   qty: 1,
      //   img: 'https://images.unsplash.com/photo-1451290337906-ac938fc89bce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fHdhdGNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      //   id: 1
      // },
      // {
      //   price: 999,
      //   title: 'Mobile Phone',
      //   qty: 10,
      //   img: 'https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=706&q=80',
      //   id: 2
      // },
      // {
      //   price: 999,
      //   title: 'Laptop',
      //   qty: 4,
      //   img: 'https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGxhcHRvcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      //   id: 3
      // },

    }
  }

  componentDidMount() {
    // firebase
    //     .firestore()
    //     .collection('products')
    //     .get()
    //     .then((snapshot) => {
    //       console.log(snapshot);
    //       snapshot.docs.map((doc) => {
    //         console.log(doc.data());
    //       });

    //       const products = snapshot.docs.map((doc)=>{
    //         const data = doc.data();

    //         data['id'] = doc.id;
            
    //         return data;
    //       })

    //       this.setState({
    //         products : products,
    //         loading : false
    //       })
    //     })
    //onSnapshot is called to automatic take the changed value witout refreshing
    firebase
        .firestore()
        .collection('products')
        .onSnapshot((snapshot)=>{
          console.log(snapshot);
          snapshot.docs.map((doc) => {
            console.log(doc.data());
          });

          const products = snapshot.docs.map((doc)=>{
            const data = doc.data();

            data['id'] = doc.id;
            
            return data;
          })

          this.setState({
            products : products,
            loading : false
          })
        })
  }

  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;
    this.setState({
      products: products
    })
  }
  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);


    if (products[index].qty === 0) {
      return;
    }
    products[index].qty -= 1;
    this.setState({
      products: products
    })
  }
  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id); // = [{}]return an array

    this.setState({
      products: items
    })

  }
  getCartCount = () => {
    const { products } = this.state;


    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  }
  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.forEach((product) => {
      cartTotal = cartTotal + product.qty * product.price;
    })

    return cartTotal;
  }
  render() {
    const { products , loading } = this.state;
    return (
      <div className="App">
        <Navbar
          count={this.getCartCount()}
        />
        <h1>Cart</h1>
        <Cart
          products={products}

          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h1>Loading Products ....</h1>}
        <div style={{ fontSize: 20, padding: 10 }}>Total : {this.getCartTotal()}</div>
      </div>
    );
  }
}


export default App;
