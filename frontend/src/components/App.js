import React from 'react';
import Title from './Title'
import Navbar from './Navbar'
import {BrowserRouter as Router} from 'react-router-dom'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
        <Navbar/>
        <Title title='Products'/>
    </Router>
  );
}

export default App;
