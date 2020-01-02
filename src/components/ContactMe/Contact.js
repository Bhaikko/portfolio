import React, { Component } from 'react';

import classes from './Contact.module.css';
import PageTitle from '../UI/PageTitle/PageTitle';
import ContactForm from './../../containers/ContactForm/ContactForm';
import RightArrowIcon from './../../images/RightArrow.png';
import ContactIcon from '../UI/ContactIcon/ContactIcon';

import GithubIcon from './../../images/Github.png';
import LinkedInIcon from './../../images/LinkedIn.png';
import InstagramIcon from './../../images/Instagram.png';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
  
    componentDidMount() {
        this.props.setReference("contactRef", this.myRef);
    }

    render() {
        return (
            <section className={classes.Contact} ref={this.myRef}>
                <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0 L50 100 L100 0 Z" fill="#f5f5f5" stroke="#f5f5f5"></path>
                </svg>
                <PageTitle classes={classes.PageTitle}>Contact</PageTitle>
    
                <div className={classes.ContactMessage}>
                    Have A Question??
                </div>
    
                <ContactForm />
    
                <div className={classes.Footer}>
                    <div className={classes.BackToTop}>
                        <img src={RightArrowIcon} className={classes.RightArrow} alt="..."/>
                        <img src={RightArrowIcon} className={classes.RightArrow} alt="..."/>
                    </div>
                    <div className={classes.ContactIcons}>
                        <ContactIcon contactLink="https://github.com/Bhaikko" icon={GithubIcon} />
                        <ContactIcon contactLink="https://in.linkedin.com/in/siddharth-pawar-81172b186" icon={LinkedInIcon} />
                        <ContactIcon contactLink="https://www.instagram.com/bhaikk0/" icon={InstagramIcon} />
                    </div>
                    <div className={classes.FootNote}>
                        siddharth pawar 
                        <span style={{color: "#EE0079"}}>©2020</span>
                    </div>
                </div>
    
            </section>
        );
    }
}

export default Contact;