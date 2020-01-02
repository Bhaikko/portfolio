import React, { Component } from 'react';

import classes from './ContactForm.module.css';
import Button from './../../components/UI/Button/Button';


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
    }

    submitHandler = () => {
        const data = JSON.stringify(this.state);
        fetch(`https://portfolio-16066.firebaseio.com/messages.json`, {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: data
        })
            .then(() => {
                alert("Thank you for your response, I'll reach you ASAP!")
            })
            .catch(err => {
                console.log(err);
                alert("Something Went Wrong");
            });
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