import { Component } from 'react';
import Products from './components/Products';
import Layout from './components/Layout';
import Title from './components/Title';
import Navbar from './components/Navbar';

class App extends Component {
  state = {
    products: [
      { name: 'Tomato', price: 1500, img: '/products/tomato.jpg' },
      { name: 'Peas', price: 2500, img: '/products/peas.jpg' },
      { name: 'Lettuce', price: 500, img: '/products/lettuce.jpg' }
    ],
    cart: [],
    cartIsVisible: false,
  }

  addToCart = (product) => {
    const { cart } = this.state;

    if (cart.find(x => x.name === product.name)) {
      const newCart = cart.map(x => x.name === product.name ? { ...x, quantity: x.quantity + 1 } : x);
      return this.setState({ cart: newCart });
    }

    return this.setState({
      cart: [...this.state.cart, { ...product, quantity: 1 }]
    });
  }

  showCart = () => {
    if (!this.state.cart.length)
      return;

    return this.setState({ cartIsVisible: !this.state.cartIsVisible });
  }

  render() {
    const { cartIsVisible } = this.state;
    return (
      <div>
        <Navbar
          cart={this.state.cart}
          cartIsVisible={cartIsVisible}
          showCart={this.showCart}
        />
        <Layout>
          <Title />
          <Products
            addToCart={this.addToCart}
            products={this.state.products}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
