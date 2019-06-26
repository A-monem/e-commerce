import React, { Component } from 'react'
import Product from './Product'
import {ProductConsumer} from './Context'

export default class ProductList extends Component {

  render() {

    return (
      <div className='container py-5'>
        <div className='row'>
          <ProductConsumer>
            {(value)=>(
              value.list.map((product) => (
                <Product key={product.id} product={product}/>
              ))
            )}
          </ProductConsumer>
        </div>
      </div>
    )
  }
}
