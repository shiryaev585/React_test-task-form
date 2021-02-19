import React from 'react';
import './Footer.scss'
import FooterBottom from './FooterBottom/FooterBottom';
import FooterTop from './FooterTop/FooterTop';

const Footer = (props) => {
    return (
        <footer className='footer'>
            <FooterTop />
            <div className='footer__line'></div>
            <FooterBottom />
        </footer>
    );
};

export default Footer;