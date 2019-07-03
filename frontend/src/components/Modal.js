import React, { Component } from 'react'
import styled from 'styled-components'
import { ProductConsumer } from './Context'
import { Link } from 'react-router-dom'
import { ButtonContainer } from './Button'

export default class Modal extends Component {
    state = {

    }
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { modalOpen, openModal, closeModal, modalProduct } = value

                    return (
                        !modalOpen
                            ? null
                            : <ModalContainer>
                                <div className='container'>
                                    <div className='row'>
                                        <div className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize" id="modal">
                                            <h5>item added to cart</h5>
                                            <img src={modalProduct.image} className="img-fluid" alt="phone product" />
                                            <h5>{modalProduct.title}</h5>
                                            <h6 className="text-muted">price : ${modalProduct.price}</h6>
                                            <Link to="/">
                                                <ButtonContainer
                                                    onClick={() => {
                                                        closeModal();
                                                    }}>
                                                    Continue Shopping
                                                </ButtonContainer>
                                            </Link>
                                            <Link to="/cart">
                                                <ButtonContainer
                                                    cart
                                                    onClick={() => {
                                                        closeModal();
                                                    }}>
                                                    Go To Cart
                                                </ButtonContainer>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>

                    )

                }}
            </ProductConsumer>
        )
    }
}

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    #modal {
        background: var(--mainWhite);
    }
`