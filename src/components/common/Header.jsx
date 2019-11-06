import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <div><img src='' alt='logo' /></div>
            <div><Link to='/'><h1>OCDresser</h1></Link></div>
            <nav>
                <ul>
                    <li><Link to='/closet'>Closet</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;