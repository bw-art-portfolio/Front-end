import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Container, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import axios from 'axios';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'fname': '',
            'email': '',
            'password': '',
        };
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
        // console.log ('handlechange', e.target.name)
        // console.log("value", e.target.value)
    };

    handleSubmit = e => {
        e.preventDefault();

        axios
            .post(' https://artportfoliobw.herokuapp.com/signup/', this.state)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                this.props.history.push('/') 
            })
            .catch(err => console.log(err))

    };



    render() {
        // console.log("register", localStorage.token)
        return (
            <Container className='registration-container'>
                <h1>Registration</h1>
                <Form className='registration-form' onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="fname">First Name</Label>
                        <Input
                            type="text"
                            name="fname"
                            id="fname"
                            value={this.state.fname}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                            type="text"
                            name="email"
                            id="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                            type="text"
                            name="password"
                            id="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <Button type='submit'>Register</Button>
                    <Link to='/artist'></Link>
                </Form>

            </Container>

        )
    }
}

export default withRouter(Register);