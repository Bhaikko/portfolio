import React from 'react';

import classes from './PageTitle.module.css';

const PageTitle = props => {
    return (
        <div className={[classes.PageTitle, props.classes].join(" ")} >
            {props.children}
        </div>
    );
}

export default PageTitle;