import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'

export default class ProductList extends Component {
  state={
    products: []
  }
  render() {
    
    return (
      <div className='container py-5'>
        <h1>Product List</h1>
      </div>
    )
  }
}
