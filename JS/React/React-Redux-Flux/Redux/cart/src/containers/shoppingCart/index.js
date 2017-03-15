import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../actions';
import styles from './styles.css';

class ShoppingCart extends Component {

  _renderShoppingItems(){
    return this.props.shoppingCart.map((item) => {
      return(
        <li key={item.id}
            onClick={ () => this.props.removeFromCartDispatch(item.id) }
            className={styles.cartItem} >
          <img src={item.link} />
          {item.title}
        </li>
      )
    });
  }

  render(){
    return(
      <div>
        <h1> Shopping cart </h1>
        <ul className={styles.cartContainer}>
          {this._renderShoppingItems()}
        </ul>
      </div>
    )
  }

}

//
// Redux logic
//

//Redux state holds all redcure entries in the main reducer
const mapStateToProps = (reduxState) => {
  return {
    shoppingCart: reduxState.shoppingCart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCartDispatch: (id) => dispatch(removeFromCart(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
