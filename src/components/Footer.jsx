import React from 'react'
import logoImg from '../assets/Library.svg'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row row__column">
                    <Link to="/">
                        <figure className="footer__logo">
                            <img src={logoImg} alt="" className="footer__logo--img" />
                        </figure>
                    </Link>
                    <div className="footer__list">
                        <Link to="/" className='footer__link'>
                            Home
                        </Link>
                        <Link to="/About" className='footer__link no-cursor'>
                            About
                        </Link>
                        <Link to="/Books" className='footer__link'>
                            Books
                        </Link>
                        <Link to="/Cart" className='footer__link'>
                            Cart
                        </Link>
                    </div>
                    <div className="footer__copyright">
                        Copyright &copy; 2022 Library
                    </div>
                </div>
            </div>
        </footer>
    )
}
