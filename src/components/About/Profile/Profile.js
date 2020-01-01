import React from 'react';

import classes from './Profile.module.css';
import Me from './Me/Me';
import SkillsTabset from './SkillsTabset/SkilsTabset';

const Profile = () => {
    return (
        <div className={classes.ProfileContainer}>
            <Me />
            <SkillsTabset />
        </div>
    );
}

export default Profile;