import React from 'react';

import './Toolbar.css';
import '../SideDrawer/DrawerToggleButton'
import drawerToggleButton from '../SideDrawer/DrawerToggleButton';


const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar-nav">
            <div className="toolbar-toggle-button">
                <drawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar-logo">
                <a href="#">Maylin Jewelry</a>
            </div>
            <div className="spacer"></div>
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