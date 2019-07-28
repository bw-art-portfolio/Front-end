import react from 'react';
import { Container, Form, FormGroup, Input, Label, Button } from 'reactstrap';

class LoginForm extends Component {
    state = {
        name: '',
        password: '',
    }

    render() {
        return (
            <Container className='login-form'>
                <Form>
                    <FormGroup>
                        <Label for="userName">User Name</Label>
                        <Input type="username" name="username" id="username" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" />
                    </FormGroup>
                    <Button>LOGIN</Button>
                </Form>

            </Container>
        )
    }
}