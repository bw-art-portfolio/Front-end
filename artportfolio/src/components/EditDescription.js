import React, {Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Container, Form, FormGroup, Input, Label, Button } from 'reactstrap';

 class EditDescription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
        }
    }

    // componentWillMount = () => {
    //     localStorage.token ? null : this.props.history.push('/login');
    
    // }


    componentDidMount() {
        const token = localStorage.getItem('token');
        const requestOptions = {
            headers: {
                Authorization: token,
                
            }
        }
    

        axios
            .get(`https://artportfoliobw.herokuapp.com/`, requestOptions)
            .then(res => this.setState({
                description: res.data.description
            }))
            .catch(err => this.props.history.push('/login'))
    }



    handleSubmit = () => {
        const token = localStorage.getItem('token');
        const requestOptions = {
            headers: {
                Authorization: token,
                
                

            }
        }

        //editedPhotoId is a placeholder to avoid errors
        axios

        .put(`https://artportfoliobw.herokuapp.com/` , {description: this.state.description} 
         , requestOptions
        )

        .then (() => this.props.history.push('/artist'))// may change endpoint, dont think this one is right. 
        .catch(err => this.props.history.push('/login'))

            
    }

    handleChange = e => {
        this.setState({ [e.target.name] : e.target.value })
        // console.log ('handlechange', e.target.name)
        // console.log("value", e.target.value)
    }

    render() {
        console.log('description', this.state)
        return (
            <div>
                <Container>
                   <Form>
                       <Input 
                       name="description"
                       type="text"
                       value={this.state.description}
                       onChange={(e) => this.handleChange(e)} />
                       <Button type="submit" onClick={() => this.handleSubmit(this.props.match.params.photoId)}>Edit Description</Button>
                   </Form>
                </Container>

            </div>
        )
    }
}

export default withRouter(EditDescription);

