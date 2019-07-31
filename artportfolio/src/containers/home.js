import React from 'react';
import { Container, Card, CardBody, CardHeader, Row, Col} from 'reactstrap';



const Home = props => {
    console.log("home", props)
    return (
        <div className="home-page">
            <Container>
                <Card className='artist-card'>
                    <CardHeader>
                        <img src={props.avatar} alt={props.alt} />
                <span>{props.firstName} {props.lastName}</span>
                        <CardBody>
                           <img src={props.image} alt={props.alt}/>
                           <p>{props.likes}</p>
                           <p>{props.desc}</p>


                        </CardBody>
                    </CardHeader>
                </Card>
            </Container>
        </div>
    )
}

export default Home;