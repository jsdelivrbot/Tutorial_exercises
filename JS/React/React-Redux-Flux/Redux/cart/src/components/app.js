import React, { Component } from 'react'

//app components
import Items from '../containers/items';
import ShoppingCart from '../containers/shoppingCart';


export default class App extends Component {

  render(){
    return(
      <div>
        <Items />
        <ShoppingCart />
      </div>
    )
  }

}
