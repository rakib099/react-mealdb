import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            <h1>Hungry? Pick the one you like!</h1>
            <input type="text" name="" id="" placeholder='Search your desired food' />
            <button id="btn-search">Search</button>
        </header>
    );
};

export default Header;