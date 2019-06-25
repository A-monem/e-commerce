import React from 'react';
import Title from './Title'
import Navbar from './Navbar'
import ProductList from './ProductList'
import Details from './Details'
import Cart from './Cart'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
        <Navbar/>
        <Title title='Products'/>
          <Switch>
            <Route exact path='/' component={ProductList}/>
            <Route path='/details' component={Details}/>
            <Route path='/cart' component={Cart}/>
          </Switch> 
    </Router>
  );
}

export default App;
