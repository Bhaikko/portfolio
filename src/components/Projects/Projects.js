import React, { Component } from 'react';

import classes from './Projects.module.css';
import PageTitle from '../UI/PageTitle/PageTitle';
import Button from '../UI/Button/Button';
import Project from '../UI/Project/Project';

import { projects } from './projectdata';

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentTab: "all"
        }
    }

    changeTabHandler = (tab, event) => {
        event.target.selected = true;   
        
        this.setState({
            currentTab: tab
        });
    }

    render() {
        return (
            <section className={classes.Projects}>
                <PageTitle>Projects</PageTitle>
                <div className={classes.ProjectsContainer}>
                    <div className={classes.ButtonsContainer}>
                        <Button classes={classes.Button} onClick={(event) => this.changeTabHandler("all", event)} selected={this.state.currentTab === "all"}>All</Button>
                        <Button classes={classes.Button} onClick={(event) => this.changeTabHandler("react", event)} selected={this.state.currentTab === "react"}>React + Redux</Button>
                        <Button classes={classes.Button} onClick={(event) => this.changeTabHandler("native", event)} selected={this.state.currentTab === "native"}>React Native</Button>
                        <Button classes={classes.Button} onClick={(event) => this.changeTabHandler("angular", event)} selected={this.state.currentTab === "angular"}>Angular</Button>
                        <Button classes={classes.Button} onClick={(event) => this.changeTabHandler("aspcore", event)} selected={this.state.currentTab === "aspcore"}>ASP Core .NET</Button>
                        <Button classes={classes.Button} onClick={(event) => this.changeTabHandler("js", event)} selected={this.state.currentTab === "js"}>Javascript</Button>
                        <Button classes={classes.Button} onClick={(event) => this.changeTabHandler("games",event)} selected={this.state.currentTab === "games"}>Games</Button>
                    </div>

                    <div className={classes.ProjectsShowcaseContainer}>
                        {(() => {
                            switch (this.state.currentTab) {
                                case "all":
                                    return projects.all.map(project => (
                                        <Project
                                            key={project.id}
                                            projectImage={project.projectImage}
                                            projectLink={project.projectLink}
                                            projectName={project.projectName}
                                            projectDescription={project.projectDescription}
                                            imageStyle={{
                                                width: "500px",
                                                height: "400px"
                                            }}
                                        />
                                    ));

                                case "react":
                                    return projects.react.map(project => (
                                        <Project
                                            key={project.id}
                                            projectImage={project.projectImage}
                                            projectLink={project.projectLink}
                                            projectName={project.projectName}
                                            projectDescription={project.projectDescription}
                                            imageStyle={{
                                                width: "500px",
                                                height: "400px"
                                            }}
                                        />
                                    ));
                                case "native":
                                    return projects.native.map(project => (
                                        <Project
                                            key={project.id}
                                            projectImage={project.projectImage}
                                            projectLink={project.projectLink}
                                            projectName={project.projectName}
                                            projectDescription={project.projectDescription}
                                            imageStyle={{
                                                width: "500px",
                                                height: "400px"
                                            }}
                                        />
                                    ));
                                case "angular":
                                    return projects.angular.map(project => (
                                        <Project
                                            key={project.id}
                                            projectImage={project.projectImage}
                                            projectLink={project.projectLink}
                                            projectName={project.projectName}
                                            projectDescription={project.projectDescription}
                                            imageStyle={{
                                                width: "500px",
                                                height: "400px"
                                            }}
                                        />
                                    ));
                                case "aspcore":
                                    return projects.aspcore.map(project => (
                                        <Project
                                            key={project.id}
                                            projectImage={project.projectImage}
                                            projectLink={project.projectLink}
                                            projectName={project.projectName}
                                            projectDescription={project.projectDescription}
                                            imageStyle={{
                                                width: "500px",
                                                height: "400px"
                                            }}
                                        />
                                    ));
                                case "js":
                                    return projects.js.map(project => (
                                        <Project
                                            key={project.id}
                                            projectImage={project.projectImage}
                                            projectLink={project.projectLink}
                                            projectName={project.projectName}
                                            projectDescription={project.projectDescription}
                                            imageStyle={{
                                                width: "500px",
                                                height: "400px"
                                            }}
                                        />
                                    ));
                                case "games":
                                    return projects.games.map(project => (
                                        <Project
                                            key={project.id}
                                            projectImage={project.projectImage}
                                            projectLink={project.projectLink}
                                            projectName={project.projectName}
                                            projectDescription={project.projectDescription}
                                            imageStyle={{
                                                width: "500px",
                                                height: "400px"
                                            }}
                                        />
                                    ));
                            }
                        })()}
                    </div>
                </div>
            </section>
        );
    }
}

export default About;