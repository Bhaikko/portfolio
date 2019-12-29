import React, { Component } from 'react';

// import classes from './App.module.css';

import Introduction from './../../components/Introduction/Introduction';
import Navbar from '../../components/UI/Navbar/Navbar';
import About from '../../components/About/About';

class App extends Component {
    render() {
        return (
            <>
                <Introduction />
                <Navbar />
                <About />
            </>
        );
    }
}

export default App;