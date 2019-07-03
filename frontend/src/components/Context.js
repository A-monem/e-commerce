import React, { Component } from 'react'


const getData = () => (
    fetch('/api/products')
      .then( response => response.json())
      .catch(err => console.log(err))
  )


const ProductContext = React.createContext()
//Provider
//Consumer

class ProductProvider extends Component {   
    state={
        products: [], 
        singleProduct: null, 
        cart: [], 
        modalOpen: false,
        modalProduct: null,
        cartSubtotal: 0,
        cartTotal:0,
        cartTax:0
      }
    
    componentDidMount(){
        getData()
          .then((data) => (
            this.setState({
              products: data
            })
          ))
      }
    
    getItem = (id) => {
      const product = this.state.products.find(ele => ele.id === id)
      return product
    }

    handleDetails = (id) => (
      this.setState({
        singleProduct: this.getItem(id)
      })
    )   

    handleAddToCart = (id) => {
        let tempProducts = this.state.products
        let index = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index];
        product.incart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        this.setState({
          cart: [...this.state.cart, product],
          singleProduct: product
        })
    }

    handleOpenModal = (id) => {
      const product = this.getItem(id)
      this.setState({
        modalProduct:product,
        modalOpen: true
      })
    }

    handleCloseModal = () => {
      this.setState({
        modalOpen: false
      })
    }

    increment = (id) => {
      console.log("increment")
    }

    decrement = (id) => {
      console.log("decrement")
    }

    removeItem = (id) => {
      console.log('remove item')
    }

    clearCart = () => {
      console.log("clear cart")
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetails: this.handleDetails,
                handleAddToCart: this.handleAddToCart, 
                openModal: this.handleOpenModal,
                closeModal: this.handleCloseModal, 
                clearCart: this.clearCart,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer

export {ProductProvider, ProductConsumer}
