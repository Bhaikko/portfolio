import React, { Component } from 'react';

import classes from './Navbar.module.css';
import NavbarLink from './NavbarLink/NavbarLink';

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentActiveTab: "home"
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

    render() {
        return (
            <div className={classes.Navbar} ref={this.navbarReference}>
                <div className={classes.NavbarItems}>
                    <NavbarLink onClick={() => this.scrollToSection(this.props.references.introductionRef)} Active={this.state.currentActiveTab === "home"}>Home</NavbarLink>
                    <NavbarLink onClick={() => this.scrollToSection(this.props.references.aboutRef)} Active={this.state.currentActiveTab === "about"}>About</NavbarLink>
                    <NavbarLink onClick={() => this.scrollToSection(this.props.references.projectsRef)} Active={this.state.currentActiveTab === "portfolio"}>Portfolio</NavbarLink>
                    <NavbarLink onClick={() => this.scrollToSection(this.props.references.contactRef)} Active={this.state.currentActiveTab === "contact"}>Contact</NavbarLink>
                    <NavbarLink>Resume</NavbarLink>
                </div>
            </div>
        );
    }
}

export default Navbar;