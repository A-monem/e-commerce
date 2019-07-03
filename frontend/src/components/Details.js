import React, { Component } from 'react'
import {ProductConsumer} from './Context'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button'
import Title from './Title'

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value)=>{
          const product = value.singleProduct
          const {id, title, price, image, description, company, incart, count, total} = product
          return(
            <div className='container'>
              <Title title={title}/>
              <div className='row mt-3'>
                <div className='col-10 mx-auto col-md-6 my-3'>
                    <img src={image} alt='Product Image' className="img-fluid"/>
                </div>
                <div className='col-10 mx-auto col-md-6 my-3 light-green'>
                    <h4><strong>Model:</strong> {title}</h4>
                    <h4 className='text-capitalize mt-3 mb-2'><strong>made by:</strong> {company}</h4>
                    <h5 className='text-capitalize mt-3 mb-2'><strong>Price:</strong> ${price}</h5>
                    <h5 className='text-capitalize mt-3 mb-2'><strong>Info:</strong> <p className='text-muted text-small mt-3 mb-2'>{description}</p></h5>
                    <Link to='/'>
                      <ButtonContainer>Back to products</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      disabled={incart? true: false}
                      onClick={() => {
                        value.handleAddToCart(id)
                        value.openModal(id)}}>
                      {incart? "InCart": "Add to Cart"}
                    </ButtonContainer>
                </div>
              </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
