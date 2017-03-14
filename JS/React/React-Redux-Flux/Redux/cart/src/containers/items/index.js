//Application imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';

//Action creators
import { addToCart } from '../../actions';

class Items extends Component {

  //
  // Render <li> of item in store
  //
  _renderList(){
    const { items, addToCartAction }  = this.props;
    return items.map((item) => {
      return(
        <li key={item.id}
            className={styles.ilistIndiItem}
            onClick={ ()=> {addToCartAction(item) } }>
          <img src={item.link}/>
          <span>{item.title}</span>
        </li>
      )
    });
  }

  //
  // Render component
  //
  render(){
    return(
      <ul className={styles.ilistItem}>
        {this._renderList()}
      </ul>
    )
  }

}//end of class

//
// Redux logic
//
const mapStateToProps = (reduxState) => {
  return {
    items: reduxState.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCartAction: (item) => dispatch(addToCart(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);
