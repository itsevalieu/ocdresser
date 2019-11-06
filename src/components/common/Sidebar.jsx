import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <aside>
            <div><img src='' alt='logo' /></div>
            <div><Link to='/'><h1>OCDresser</h1></Link></div>
            <nav>
                <ul>
                    <li><Link to='/closet'>Closet</Link></li>
                </ul>
            </nav>
        </aside>
    );
}