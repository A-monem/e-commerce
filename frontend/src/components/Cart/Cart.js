import React, { Component } from 'react'
import Title from '../Title'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import {ProductConsumer} from '../Context'
import CartList from './CartList'
import CartTotals from './CartTotals'
export default class Cart extends Component {
  render() {
    return (
      <div>
        <Title title='Your Cart'/>
        <ProductConsumer>
          {(value) => {
            const {cart} = value
            return (
              cart.length > 0
            ? <div>
                <CartColumns/>
                <CartList value={value}/>
                <CartTotals value={value} history={this.props.history}/>
              </div>
            : <EmptyCart /> 
            )
          }}
        </ProductConsumer>
      </div>
    )
  }
}
