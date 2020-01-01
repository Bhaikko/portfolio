import React from 'react';

import classes from './Project.module.css';
import Button from './../Button/Button';

const Project = props => {
    
    return (
        <div className={classes.ProjectContainer}>
            <img src={props.projectImage} alt="..." className={classes.ProjectImage} style={props.imageStyle}/>
            <div className={classes.ProjectTitle}>
                {props.projectName}
                <div className={classes.Description}>{props.projectDescription}</div>    
            </div>

            <a href={props.projectLink} target="_blank" className={classes.Link}>
                <Button classes={classes.Button}>
                    Learn More
                </Button>
            </a>
        </div>
    );
}

export default Project;