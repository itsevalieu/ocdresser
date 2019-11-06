import React from 'react';

export const Footer = () => {
    return (
        <footer>
            <p><span>&copy; Copyright {(new Date().getFullYear())}</span>, Eva Lieu</p>
        </footer>
    );
}

export default Footer;