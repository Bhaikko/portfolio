import React from 'react';

import classes from './About.module.css';
import PageTitle from '../UI/PageTitle/PageTitle';
import Traits from './Traits/Traits';
import Profile from './Profile/Profile';


const About = () => {
    return (
        <section className={classes.About}>
            <PageTitle>About</PageTitle>
            <Traits />
            <Profile />
        </section>
    );
}

export default About;