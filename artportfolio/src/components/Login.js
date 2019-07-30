import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import axios from 'axios';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'email': '',
            'password': '',
        };
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();

        axios
            .post(' https://artportfoliobw.herokuapp.com/login/', this.state)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                this.props.history.push('/') // push to home
            })
            .catch(err => console.log(err))
    };

    render() {
        console.log("login", localStorage.token)
        return (
            <Container className='login-container'>
                <h1>Login</h1>
                <Form className='login-form' onSubmit={this.handleSubmit}>
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
                    <Button type='submit'>LOGIN</Button>
                    <Link to='/register'></Link>
                </Form>

            </Container>

        )
    }
}


export default Login;