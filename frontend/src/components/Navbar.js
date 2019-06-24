import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import logo from '/static/frontend/';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className='navbar navbar-expand-sm navbar-dark bg-success px-sm-5'>
                    {/* <Link to='/'>
                        <img src={logo} alt='Products' className='navbar-brand' />
                    </Link> */}
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/'>Products</Link>
                        </li>
                    </ul>
                    <ul className='navbar-nav ml-auto'>
                        <li className='nav-item '>
                            <Link to='/cart' className='nav-link'>
                                <i className="fas fa-shopping-cart"></i>
                            </Link>
                        </li>
                    </ul> 
                </nav>
            </div>
        )
    }
}
