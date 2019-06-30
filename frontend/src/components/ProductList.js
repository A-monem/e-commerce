import React, { Component } from 'react'
import Product from './Product'
import { ProductConsumer } from './Context'
import Title from './Title'
export default class ProductList extends Component {

  render() {
    return (
      <>
        <Title title='Products'/>
        <div className='container py-3'>
          <div className='row'>
            <ProductConsumer>
              {(value) => (
                value.list.map((product) => (
                  <Product 
                  key={product.id} 
                  product={product} 
                  handleDetails={value.handleDetails}
                  handleAddToCart={value.handleAddToCart}/>
                ))
              )}
            </ProductConsumer>
          </div>
        </div>
      </>

    )
  }
}
