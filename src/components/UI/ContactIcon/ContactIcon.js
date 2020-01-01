import React from 'react';

import classes from './ContactIcon.module.css';

const ContactIcon = props => {
    return (
        <a href={props.contactLink} target="__blank" rel="noopener noreferrer">
            <div className={classes.ContactIconContainer}>
                <img src={props.icon} alt="..." />
            </div>
        </a>
    );
}

export default ContactIcon;