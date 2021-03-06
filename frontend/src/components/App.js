import React from 'react';
import Navbar from './Navbar'
import ProductList from './ProductList'
import Details from './Details'
import Cart from './Cart/Cart'
import Modal from './Modal'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ProductProvider } from './Context'

function App() {
    return (
        <ProductProvider>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={ProductList} />
                    <Route path='/details' component={Details} />
                    <Route path='/cart' component={Cart} />
                </Switch>
                <Modal />
            </Router>
        </ProductProvider>
    );
}

export default App;
