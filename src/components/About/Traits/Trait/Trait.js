import React from 'react';

import classes from './Trait.module.css';

const Trait = props => {
    return (
        <div className={classes.TraitContainer}>
            <div className={classes.Hexagon}>
                <img src={props.traitImage} className={classes.TraitImage} alt="..."/>
            </div>
            <div className={classes.TraitTitle}>
                {props.traitTitle}
            </div>
            <div className={classes.TraitDescription}>
                {props.traitDescription}
            </div>
        </div>
    );
}

export default Trait;