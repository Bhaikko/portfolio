import React from 'react';
import Particles from 'react-particles-js';

import classes from './Introduction.module.css';
import Button from '../UI/Button/Button';

const Introduction = () => {
    return (   
        <div className={classes.Introduction}>
            <Particles 
                style={{
                    height: "150%",
                    width: "150%"
                }}
                params={{
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
                }}
            />
            <Button 
                classes={classes.Button}
            >
                Hello
            </Button>
        </div>  
    );
}

export default Introduction;