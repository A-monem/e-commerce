import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

export default class Product extends Component {

  render() {
    const {id, image, title, price, incart} = this.props.product
    const handleDetails = this.props.handleDetails
    const handleAddToCart = this.props.handleAddToCart
    return (
      <ProductWrapper className='mx-auto col-9 col-md-6 col-lg-3 my-3'>
        <div className='card'>
          <div className='img-container p-5' onClick={() => handleDetails(id)}>
            <Link to='/details'>
              <img src={image} alt='Product Image' className='card-img-top'/>
            </Link>
            <button className='cart-btn' disabled={incart?true:false} onClick={() => handleAddToCart(id)}>
              {incart? <p className='text-small mb-0' disabled>In cart</p> : <i className='fa fa-cart-plus'/>}
            </button>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <p className="mb-0">
              <span>$ {price}</span>
            </p>
          </div>
        </div>
      </ProductWrapper>
    )}
}

Product.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    incart: PropTypes.bool
  }).isRequired
}

const ProductWrapper = styled.div`
  .card{
    border: none;
    transition: all 0.5s linear;
  }

  .card-footer{
    background: transparent;
    border-top: transparent;
    transition: all 0.5s linear;
  }

  .card-footer p {
    color: var(--lightGreen);
  }

  &:hover{
    .card{
      box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.4)
    }
    .card-footer{
      background: rgba(247,247,247)
    }
  }

  .img-container{
    position: relative;
    overflow: hidden;
  }

  .card-img-top{
    transition: all 0.5s linear;
  }

  .img-container:hover .card-img-top{
    transform: scale(1.2);
  }

  .cart-btn{
    position: absolute;
    bottom:0;
    right:0;
    padding: 0.2rem 0.4rem;
    background: var(--mainOrange);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.5s linear;
  }

  .img-container:hover .cart-btn{
    transform: translate(0,0);
  }
`
