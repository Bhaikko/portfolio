import React, { Component } from 'react';

import classes from './Navbar.module.css';
import NavbarLink from './NavbarLink/NavbarLink';
import { RESUME_LINK } from '../../../credentials';

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentActiveTab: "home",
            showNavbar: false
        }
        this.navbarReference = React.createRef();
    }

    scrollHandler = () => {
        if (window.pageYOffset > window.innerHeight + 50) {
            this.navbarReference.current.classList.add(classes.NavbarFixedPosition);
        } else {
            this.navbarReference.current.classList.remove(classes.NavbarFixedPosition);
        }

        if (window.pageYOffset > 3 * window.innerHeight) {
            this.setState({
                currentActiveTab: "contact"
            });
        } else if (window.pageYOffset > 2 * window.innerHeight) {
            this.setState({
                currentActiveTab: "portfolio"
            });
        } else if (window.pageYOffset > 1 * window.innerHeight) {
            this.setState({
                currentActiveTab: "about"
            });
        } else {
            this.setState({
                currentActiveTab: "home"
            });
        }

    }

    componentDidMount() {
        window.addEventListener("scroll", this.scrollHandler);
    }

    scrollToSection = section => {
        window.scrollTo({
            top: section.offsetTop,
            behavior: "smooth"
        });
    }

    openNavbar = () => {

        this.setState(prev => ({
            showNavbar: !prev.showNavbar
        }))
    }

    closeNavBar = () => {
        this.setState({
            showNavbar: false
        });
    }

    resumeCLickHandler = () => {
        window.location = RESUME_LINK;
    }

    render() {
        return (
            <div className={[classes.Navbar, this.state.showNavbar ? classes.OpenNavBar : null].join(" ")} ref={this.navbarReference}>
                <div className={classes.NavbarItems}>
                    <NavbarLink 
                        onClick={() => this.scrollToSection(this.props.references.introductionRef)}  
                        closeNavBar={this.closeNavBar} 
                        Active={this.state.currentActiveTab === "home"}
                    >
                        Home    
                    </NavbarLink>

                    <NavbarLink 
                        onClick={() => this.scrollToSection(this.props.references.aboutRef)} 
                        Active={this.state.currentActiveTab === "about"}
                        closeNavBar={this.closeNavBar}
                    >
                        About    
                    </NavbarLink>

                    <NavbarLink 
                        onClick={() => this.scrollToSection(this.props.references.projectsRef)} 
                        Active={this.state.currentActiveTab === "portfolio"}
                        closeNavBar={this.closeNavBar}
                    >
                        Portfolio    
                    </NavbarLink>

                    <NavbarLink 
                        onClick={() => this.scrollToSection(this.props.references.contactRef)} 
                        Active={this.state.currentActiveTab === "contact"}
                        closeNavBar={this.closeNavBar}
                    >
                        Contact    
                    </NavbarLink>

                    <NavbarLink onClick={this.resumeCLickHandler}>Resume</NavbarLink>

                </div>
                
                <div className={classes.Hamburger} onClick={this.openNavbar}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollHandler);
    }
}

export default Navbar;