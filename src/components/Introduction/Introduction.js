import React, { Component } from 'react';
import Particles from 'react-particles-js';

import classes from './Introduction.module.css';

import IntroductionBox from './IntroductionBox/IntroductionBox';

const particleOptions = {
  particles: {
    number: {
      value: 250,
      density: {
        enable: false,
      }
    },
    color: {
      value: '#EE0079'
    },
    shape: {
      type: 'circle',
      polygon: {
        nb_sides: 3
      }
    },
    size: {
      value: 1.5
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    },
    line_linked: {
        distance: 100,
        opacity: 0.1
    }
  },
  retina_detect: true
};

class Introduction extends Component {

    constructor(props) {
      super(props);
      this.myRef = React.createRef();
    }

    componentDidMount() {
      this.props.setReference("introductionRef", this.myRef);
    }

    render() {
      return (   
          <section className={classes.Introduction} ref={this.myRef}>
              <Particles 
                  style={{
                      height: "150%",
                      width: "150%",
                      zIndex: 0
                  }}
                  className={classes.Particles}
                  params={particleOptions}
              />
  
              <IntroductionBox aboutRef={this.props.aboutRef}/>
              
          </section>  
      );
    }
}

export default Introduction;