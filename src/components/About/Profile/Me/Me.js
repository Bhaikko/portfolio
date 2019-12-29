import React from 'react';

import classes from './Me.module.css';

import ProfileImage from './../../../../images/MainPhoto.png'

const Me = () => {
    return (
        <div className={classes.MeContainer}>
            <img src={ProfileImage} alt="..." className={classes.ProfileImage} />
            <div className={classes.Introduction}>Who's this guy?</div>
            <p className={classes.Description}>
                I'm currently pursuing <span className={classes.Highlight}>B.Tech</span> in <span className={classes.Highlight}>Computer Science</span> from <br/>
                <span className={classes.Highlight}>Maharaja Agrasen Institue of Technology</span>. <br />
                I have serious passion for <br /> 
                <span className={classes.Highlight}>Game Development</span> and <span className={classes.Highlight}>Web Development</span>.
            </p>
        </div>
    );
}

export default Me;