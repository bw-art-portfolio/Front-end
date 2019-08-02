import React from 'react';
// import withRouter from 'react-router-dom';
import { Container, Card, CardBody, CardHeader, Row, Col, Button} from 'reactstrap';
import EditDescription from '../components/EditDescription';



const ArtistProfile = props => {
    console.log("home", props)
    return (
        <div className="home-page">
            <Container>
                <Card className='artist-card'>
                    <CardHeader>
                        <p>{props.desc}</p>
                        <CardBody>
                           <img src={props.image} alt={props.alt}/>
                           <p>{props.likes} LIKES</p>
                           


                        </CardBody>
                        <Button onClick={ EditDescription }>Edit description</Button>
                    </CardHeader>
                </Card>
            </Container>
        </div>
    )
}

export default  ArtistProfile;