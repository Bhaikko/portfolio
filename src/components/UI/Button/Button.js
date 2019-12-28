import React from 'react';

import classes from './Button.module.css';

const Button = props => {
    console.log(classes);
    return (
        <div className={[classes.Button, props.classes].join(" ")}>
            {props.children}
        </div>
    );
}


export default Button;