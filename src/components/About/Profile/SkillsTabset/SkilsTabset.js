import React, { Component } from 'react';

import 'react-tabs/style/react-tabs.css';

import classes from './SkillsTabset.module.css';
import Skill from '../../../UI/Skill/Skill';
import Button from './../../../UI/Button/Button';
import { skills } from './skillsdata';

class SkillsTabset extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentTab: "languages"
        }
    }

    changeTabHandler = tab => {
        this.setState({
            currentTab: tab
        });
    }

    renderSkill = skillArray => {
        return (
            skillArray.map(skill => (
                    <Skill 
                        width={skill.percentage} 
                        key={skill.id}
                    >
                        {skill.name}
                    </Skill>
                )
            )
        );
    }

    render() {
        return (
            <div className={classes.SkillsTabset}>
                <div className={classes.ButtonsContainer}>
                    <Button classes={classes.Button} onClick={() => this.changeTabHandler("languages")} selected={this.state.currentTab === "languages"}>Languages</Button>
                    <Button classes={classes.Button} onClick={() => this.changeTabHandler("webTechnologies")} selected={this.state.currentTab === "webTechnologies"}>Web Technologies</Button>
                    <Button classes={classes.Button} onClick={() => this.changeTabHandler("gameTechnologies")} selected={this.state.currentTab === "gameTechnologies"}>Game Technologies</Button>
                    <Button classes={classes.Button} onClick={() => this.changeTabHandler("desginerTechnologies")} selected={this.state.currentTab === "desginerTechnologies"}>Designer Technologies</Button>
                </div>
                <div className={classes.ProjectsShowcaseContainer}>
                    {(() => {
                        switch (this.state.currentTab) {
                            case "languages":
                               return this.renderSkill(skills.languages) 
                            case "webTechnologies":
                                return this.renderSkill(skills.webTechnologies) 
                            case "gameTechnologies":
                                return this.renderSkill(skills.gameTechnologies) 
                            case "desginerTechnologies":
                                return this.renderSkill(skills.designerTechnologies) 
                        }
                    })()}
                </div>
            </div>
        );

    }

}

export default SkillsTabset;