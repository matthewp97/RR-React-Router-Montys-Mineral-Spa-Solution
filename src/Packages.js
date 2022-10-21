import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'

<Container>
    <ListGroup>
        <ListGroup.Item active>
            Lorem Ipsum
        </ListGroup.Item>
        <ListGroup.Item>
           Here is another list item here
        </ListGroup.Item>
    </ListGroup>
</Container>



export default function Packages(props) {
    const displayPackages = props.packages.map((eachPackage) => 
        <ListGroup.Item>{eachPackage}</ListGroup.Item>)

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>Our Packages</Card.Title>
                    <Card.Text>
                        Check out some of our packages! Every package is ethically sourced and organic!
                    </Card.Text>
                </Card.Body>
                <ListGroup>
                    {displayPackages} 
                </ListGroup>
            </Card>
        </Container>
    )
}