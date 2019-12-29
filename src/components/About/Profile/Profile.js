import React from 'react';

import classes from './Profile.module.css';
import Me from './Me/Me';

const Profile = () => {
    return (
        <div className={classes.ProfileContainer}>
            <Me />
            {/* Skills */}
        </div>
    );
}

export default Profile;