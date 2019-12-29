import React from 'react';

import classes from './Navbar.module.css';
import NavbarLink from './NavbarLink/NavbarLink';

const Navbar = () => {
    return (
        <div className={classes.Navbar}>
            <div className={classes.NavbarItems}>
                <NavbarLink Active>Home</NavbarLink>
                <NavbarLink>About</NavbarLink>
                <NavbarLink>Portfolio</NavbarLink>
                <NavbarLink>Contact</NavbarLink>
            </div>
        </div>
    );
}

export default Navbar;