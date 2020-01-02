import React from 'react';

import classes from './IntroductionBox.module.css';
import Button from '../../UI/Button/Button';
import RightArrowIcon from './../../../images/RightArrow.png';

const IntroductionBox = props => {

    const scrollHandler = () => {
        window.scrollTo({
            top: props.aboutRef.offsetTop,
            behavior: "smooth"
        });
    }

    return (
        <div className={classes.IntroductionBox}>
            <div className={classes.IntroductionBoxText}>
                Hello, I'm <span className={classes.Name}>Siddharth Pawar</span>.<br/>
                I'm a full-stack web developer.
            </div>

            <Button 
                classes={classes.Button}
                onClick={scrollHandler}
            >
                View My Work
                <img src={RightArrowIcon} className={classes.RightArrow} alt="..."/>
            </Button>
        </div>
    );
}

export default IntroductionBox;