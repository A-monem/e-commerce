import React, { Component } from 'react'
import styled from 'style-components'
import {Link} from 'react-router-dom'
import {ProductConsumer} from './Context'

export default class Product extends Component {
  
  render() {
    const {id, img, title, price, inCart} = this.props.product
    return (
      <div>
        <h3>Hello from Product</h3>
      </div>
    )
  }
}
