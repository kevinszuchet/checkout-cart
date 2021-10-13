import { Component } from "react";
import BubbleAlert from './BubbleAlert';
import CartDetail from './CartDetail';

const styles = {
  cart: {
    backgroundColor: '#359A2C',
    color: '#fff',
    border: 'none',
    padding: '15px',
    borderRadius: '15px',
    cursor: 'pointer',
  },
  bubble: {
    position: 'relative',
    left: 12,
    top: 20,
  }
}

class Cart extends Component {
  render() {
    const { cart, cartIsVisible, showCart } = this.props;
    const quantity = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
      <div>
        <span style={styles.bubble}>
          {quantity > 0 ? <BubbleAlert value={quantity}/> : null}
        </span>
        <button style={styles.cart} onClick={showCart}>
          Cart
        </button>
        {cartIsVisible ? <CartDetail cart={cart} /> : null}
      </div>

    );
  }
}

export default Cart;