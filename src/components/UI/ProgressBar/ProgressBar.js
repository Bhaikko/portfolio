import React from 'react';

import classes from './ProgressBar.module.css';

const ProgressBar = props => {
    return (
        <div className={classes.Progress}>
            <div className={classes.ProgressBar} style={{width: props.width}}></div>
            {props.width}
        </div>
    );
}

export default ProgressBar;