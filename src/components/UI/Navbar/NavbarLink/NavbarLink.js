import React from 'react';

import classes from './NavbarLink.module.css';

const NavbarLink = props => {
    return (
        <div className={[classes.NavbarLink, props.Active ? classes.Active : null].join(" ")}>
            {props.children}
        </div>
    );
}

export default NavbarLink;