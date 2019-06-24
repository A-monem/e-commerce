import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import {storeProducts} from '../data'

export default class ProductList extends Component {
  state={
    products: storeProducts
  }
  render() {
    console.log(this.state.products)
    return (
      <div className='container py-5'>
        <Title title='Products'/>
          <div className='row'>

          </div>
      </div>
    )
  }
}
