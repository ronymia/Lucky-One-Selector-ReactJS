import React from 'react';
import logo from './favicon_ccexpress.png'
import './Header.css';

const Header = () => {
    return (
        <div className='menu-bar'>
            <img src={logo} alt="" />
            <nav>
                <li>Home</li>
                <li>Cart</li>
                <li>Sign Up</li>
                <li>Contact US</li>
            </nav>
        </div>
    );
};

export default Header;