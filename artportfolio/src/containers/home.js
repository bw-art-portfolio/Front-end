import React from 'react';
import { Container, Card, CardBody, CardHeader, Row, Col} from 'reactstrap';



const Home = props => {
    console.log(props)
    return (
        <div className="home-page">
            <Container>
                <Card className='artist-card'>
                    <CardHeader>
                        <span>{props.avatar}{props.name}</span>
                        <CardBody>
                            {props.image}
                        </CardBody>
                    </CardHeader>
                </Card>
            </Container>
        </div>
    )
}

export default Home;