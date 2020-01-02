import React from 'react';

import classes from './Traits.module.css';
import TraitImage from './../../../images/Trait.png'
import Trait from './Trait/Trait';

const traits = [
    {
        id: 1,
        title: "Fast",
        icon: TraitImage,
        description: "Fast load times and lag free interaction, my highest priority."
    },
    {
        id: 2,
        title: "Organized",
        icon: TraitImage,
        description: "Gets work done before Deadlines."
    },
    {
        id: 3,
        title: "Intuitive",
        icon: TraitImage,
        description: "Strong Preference for easy to use, intuitive UX/UI."
    },
    {
        id: 4,
        title: "Cooperative",
        icon: TraitImage,
        description: "I believe in working as team."
    }

]

const Traits = () => {
    return (
        <div className={classes.Traits}>
            {traits.map(trait => <Trait
                key={trait.id} 
                traitImage={trait.icon}
                traitTitle={trait.title}
                traitDescription={trait.description}
            />)}
        </div>
    );
}

export default Traits;