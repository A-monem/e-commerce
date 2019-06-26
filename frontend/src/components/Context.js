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

    handleDetails(){

      }

    handleAddToCart(){

      }

    render() {
        const list = this.state.products
        return (
            <ProductContext.Provider value={{
                list, 
                handleDetails: this.handleDetails,
                handleDetails: this.handleDetails
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer

export {ProductProvider, ProductConsumer}
