import React, { Component } from 'react';

import classes from './Projects.module.css';
import PageTitle from '../UI/PageTitle/PageTitle';
import Button from '../UI/Button/Button';
import Project from '../UI/Project/Project';

import { projects } from './projectdata';

class About extends Component {

    render() {
        return (
            <section className={classes.Projects}>
                <PageTitle>Projects</PageTitle>
                <div className={classes.ProjectsContainer}>
                    <div className={classes.ButtonsContainer}>
                        <Button classes={classes.Button} selected>All</Button>
                        <Button classes={classes.Button}>React + Redux</Button>
                        <Button classes={classes.Button}>React Native</Button>
                        <Button classes={classes.Button}>Angular</Button>
                        <Button classes={classes.Button}>ASP Core .NET</Button>
                        <Button classes={classes.Button}>Javascript</Button>
                    </div>

                    <div className={classes.ProjectsShowcaseContainer}>
                        {projects.all.map(project => (
                            <Project
                                key={project.id}
                                projectImage={project.projectImage}
                                projectLink={project.projectLink}
                                projectName={project.projectName}
                                projectDescription={project.projectDescription}
                                imageStyle={{
                                    width: "400px",
                                    height: "400px"
                                }}
                            />
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default About;