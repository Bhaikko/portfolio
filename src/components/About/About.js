import React, { Component } from 'react';

import classes from './About.module.css';
import PageTitle from '../UI/PageTitle/PageTitle';
import Traits from './Traits/Traits';
import Profile from './Profile/Profile';


class About extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
  
    componentDidMount() {
        this.props.setReference("aboutRef", this.myRef);
    }

    render() {
        return (
            <section className={classes.About} ref={this.myRef}>
                <PageTitle>About</PageTitle>
                <Traits />
                <Profile />
            </section>
        );
    }
}

export default About;