import React, { Component } from 'react';

// import classes from './App.module.css';

import Introduction from './../../components/Introduction/Introduction';
import Projects from './../../components/Projects/Projects';
import Navbar from '../../components/UI/Navbar/Navbar';
import About from '../../components/About/About';
import Contact from '../../components/ContactMe/Contact';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            
            introductionRef: React.createRef(),
            aboutRef: React.createRef(),
            projectsRef: React.createRef(),
            contactRef: React.createRef()
        }
    }

    setReference = (element, ref) => {
        this.setState({
            [element]: ref
        });
    }

    render() {
        return (
            <>
                <Introduction setReference={this.setReference}/>
                <Navbar references={{
                    introductionRef: this.state.introductionRef.current,
                    aboutRef: this.state.aboutRef.current,
                    projectsRef: this.state.projectsRef.current,
                    contactRef: this.state.contactRef.current
                }} />
                <About setReference={this.setReference} />
                <Projects setReference={this.setReference} />
                <Contact setReference={this.setReference} />
            </>
        );
    }
}

export default App;