import React, { Component } from 'react';

import classes from './ContactForm.module.css';
import Button from './../../components/UI/Button/Button';

import { FIREBASE_API_KEY } from '../../credentials';

class ContactForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            message: ""
        };
    }

    inputHandler = (id, event) => {

        this.setState({
            [id]: event.target.value
        });
        console.log(this.state);
    }

    submitHandler = () => {
        console.log(this.state);
        console.log(FIREBASE_API_KEY);
    }

    render() {
        return (
            <div className={classes.ContactForm}>
                <input type="text" onChange={event => this.inputHandler("name", event)} className={classes.FormInput} placeholder="Name"/>      
                <input type="text" onChange={event => this.inputHandler("email", event)} className={classes.FormInput} placeholder="Email"/>      
                <textarea type="text" onChange={event => this.inputHandler("message", event)} className={classes.FormInput} placeholder="Message" rows="5"/>    

                <Button onClick={this.submitHandler} classes={classes.Button} disabled={this.state.name === "" || this.state.email === "" || this.state.message === ""}>Submit</Button>  
            </div>
        );
    }
}

export default ContactForm;