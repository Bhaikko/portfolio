import React from 'react';

import classes from './IntroductionBox.module.css';
import Button from '../../UI/Button/Button';
import RightArrowIcon from './../../../images/RightArrow.png';

const IntroductionBox = props => {
    return (
        <div className={classes.IntroductionBox}>
            <div className={classes.IntroductionBoxText}>
                Hello, I'm <span className={classes.Name}>Siddharth Pawar</span>.<br/>
                I'm a full-stack web developer.
            </div>

            <Button 
                classes={classes.Button}
                onClick={() => {console.log("Clicked")}}
            >
                View My Work
                <img src={RightArrowIcon} className={classes.RightArrow} />
            </Button>
        </div>
    );
}

export default IntroductionBox;