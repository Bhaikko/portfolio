import React from 'react';

import classes from './Skill.module.css';
import ProgressBar from '../ProgressBar/ProgressBar';

const Skill = props => {
    return (
        <div className={classes.SkillContainer} >
            <div className={classes.SkillName}>{props.children}</div>
            <ProgressBar width={props.width} />
        </div>
    );
}

export default Skill;