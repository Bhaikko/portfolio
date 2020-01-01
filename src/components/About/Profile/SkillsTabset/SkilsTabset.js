import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';

import classes from './SkillsTabset.module.css';
import ProgressBar from '../../../UI/ProgressBar/ProgressBar';
import Skill from '../../../UI/Skill/Skill';

class SkillsTabset extends Component {

    skills = {
        languages: [
            {
                id: 1,
                name: "Cpp",
                percentage: "70%"
            },
        ],
        webTechnologies: [
            {
                id: 1,
                name: "React",
                percentage: "80%"
            }
        ],
        gameTechnologies: [
            {
                id: 1,
                name: "Unity Game Engine",
                percentage: "30%"
            }
        ],
        designerTechnologies: [
            {
                id: 1,
                name: "Photoshop",
                percentage: "20%"
            }
        ]
    };

    renderSkill = skillArray => {
        return (
            skillArray.map(skill => (
                    <Skill width={skill.percentage} key={skill.id}>{skill.name}</Skill>
                )
            )
        );
    }

    render() {
        console.log(this.skills);
        return (
            <div className={classes.SkillsTabset}>
                <Tabs>
                    <TabList>
                        <Tab>Languages</Tab>
                        <Tab>Web Technologies</Tab>
                        <Tab>Game Technologies</Tab>
                        <Tab>Designer Technologies</Tab>
                    </TabList>

                    <TabPanel>
                        {this.renderSkill(this.skills.languages)}
                    </TabPanel>

                    <TabPanel> 
                        {this.renderSkill(this.skills.webTechnologies)}
                    </TabPanel>

                    <TabPanel>
                        {this.renderSkill(this.skills.gameTechnologies)}
                    </TabPanel>

                    <TabPanel>
                        {this.renderSkill(this.skills.designerTechnologies)}
                    </TabPanel>

                </Tabs>
            </div>
        );

    }

}

export default SkillsTabset;