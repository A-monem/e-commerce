import React, { Component } from 'react'
import {Link} from 'react-router-dom'

const ProductContext = React.createContext()
//Provider
//Consumer

class ProductProvider extends Component {
  state = {
    products: [],
    singleProduct: null,
    cart: [],
    modalOpen: false,
    modalProduct: null,
    cartSubtotal: 0,
    cartTotal: 0,
    cartTax: 0
  }

  getData = () => (
    fetch('/api/products')
      .then(response => response.json())
      .catch(err => console.log(err))
  )

  getProducts = () => (
    this.getData()
      .then((data) => (
        this.setState(() => ({
          products: data
        }))
      ))
  )

  componentDidMount() {
    this.getProducts()
  }

  getItem = (id) => {
    const product = this.state.products.find(ele => ele.id === id)
    return product
  }

  handleDetails = (id) => (
    this.setState(() => ({
      singleProduct: this.getItem(id)
    }))
  )

  handleAddToCart = (id) => {
    let tempProducts = this.state.products
    let index = tempProducts.indexOf(this.getItem(id))
    const product = tempProducts[index];
    product.incart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(() => ({
      cart: [...this.state.cart, product],
      singleProduct: product
    }), this.addTotals)
  }

  handleOpenModal = (id) => {
    const product = this.getItem(id)
    this.setState(() => ({
      modalProduct: product,
      modalOpen: true
    }))
  }

  handleCloseModal = () => {
    this.setState(() => ({
      modalOpen: false
    }))
  }

  handleIncrement = (id) => {
    let tempCart = this.state.cart
    let product = tempCart.find(item => item.id === id)
    let index = tempCart.indexOf(product)
    tempCart[index].count = tempCart[index].count + 1
    tempCart[index].total = tempCart[index].count * tempCart[index].price
    this.setState(() => ({
      cart: tempCart
    }), this.addTotals)
  }

  handleDecrement = (id) => {
    let tempCart = this.state.cart
    let product = tempCart.find(item => item.id === id)
    let index = tempCart.indexOf(product)
    tempCart[index].count = tempCart[index].count - 1
    tempCart[index].total = tempCart[index].count * tempCart[index].price

    if (tempCart[index].count === 0) {
      this.handleRemoveItem(id)
    } else {
      this.setState(() => ({
        cart: tempCart
      }), this.addTotals)
    }

  }
  
  handleRemoveItem = (id) => {
    let tempProducts = this.state.products
    let tempCart = this.state.cart.filter(item => item.id !== id)
    let index = tempProducts.indexOf(this.getItem(id))
    tempProducts[index].incart = false
    tempProducts[index].total = 0
    tempProducts[index].count = 0

    this.setState(() => ({
      products: tempProducts,
      cart: tempCart
    }), this.addTotals)
  }

  handleClearCart = () => {
    this.setState(() => ({
      cart: [],

    }), () => {
      this.getProducts()
      this.addTotals()
    })
  }

  addTotals = () => {
    let subTotal = 0
    this.state.cart.map(item => subTotal += item.total)
    let tax = Number((subTotal * 0.1).toFixed(2))
    let total = subTotal + tax
    this.setState(() => ({
      cartSubtotal: subTotal,
      cartTotal: total,
      cartTax: tax
    }))
  }

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetails: this.handleDetails,
        handleAddToCart: this.handleAddToCart,
        openModal: this.handleOpenModal,
        closeModal: this.handleCloseModal,
        clearCart: this.handleClearCart,
        increment: this.handleIncrement,
        decrement: this.handleDecrement,
        removeItem: this.handleRemoveItem
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }
