import React, { Component } from 'react'
import Product from './Product'

const getData = () => (
  fetch('/api/products')
    .then( response => response.json())
    .catch(err => console.log(err))
)

export default class ProductList extends Component {
  
  state={
    products: []
  }

  componentDidMount(){
    getData()
      .then((data) => (
        this.setState({
          products: data
        })
      ))
  }

  render() {
    const list = this.state.products
    return (
      <div className='container py-5'>
        <div className='row'>
          {list.map((product) => (
            <Product key={product.id} product={product}/>
          ))}
        </div>
      </div>
    )
  }
}
