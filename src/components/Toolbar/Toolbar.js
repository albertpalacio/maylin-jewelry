import React from 'react';
import './Toolbar.css';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar-nav">
            <div></div>
            <div className="toolbar-logo">
                <a href="#">Maylin Jewelry</a>
            </div>
            <div className="toolbar-nav-items">
                <ul>
                    <li>
                        <a href="#"> About Us </a>
                    </li>
                    <li>
                        <a href="#"> Contact Us </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;