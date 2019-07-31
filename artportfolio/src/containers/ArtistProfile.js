import React from 'react';
import { Container, Card, CardBody, CardHeader, Row, Col} from 'reactstrap';



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
                           <p>{props.likes}</p>
                           


                        </CardBody>
                    </CardHeader>
                </Card>
            </Container>
        </div>
    )
}

export default ArtistProfile;