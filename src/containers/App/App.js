import React, { Component } from 'react';

// import classes from './App.module.css';

import Introduction from './../../components/Introduction/Introduction';
import Projects from './../../components/Projects/Projects';
import Navbar from '../../components/UI/Navbar/Navbar';
import About from '../../components/About/About';
import Contact from '../../components/ContactMe/Contact';

class App extends Component {
    render() {
        return (
            <>
                <Introduction />
                <Navbar />
                <About />
                <Projects />
                <Contact />
            </>
        );
    }
}

export default App;