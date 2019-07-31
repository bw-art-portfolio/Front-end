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
                        <h1>{props.firstName}</h1>
                        <h2>{props.lastName}</h2>


                        {/* {props.avatar} */}
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

export default Home;