import React from 'react';

import classes from './Traits.module.css';
import TraitImage from './../../../images/Trait.png'
import Trait from './Trait/Trait';

const traits = [
    {
        id: 1,
        title: "Organised",
        icon: TraitImage,
        description: "Organised And Pretty Code"
    },
    {
        id: 2,
        title: "Organised",
        icon: TraitImage,
        description: "Organised And Pretty Code"
    },
    {
        id: 3,
        title: "Organised",
        icon: TraitImage,
        description: "Organised And Pretty Code"
    },
    {
        id: 4,
        title: "Organised",
        icon: TraitImage,
        description: "Organised And Pretty Code"
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