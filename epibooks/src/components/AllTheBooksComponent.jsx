import { Component } from "react";
import { Container, Row, Col, Card,} from "react-bootstrap";
import books from '../books/fantasy.json'


class AllTheBooks extends Component{
    render() {
        return (
            <Container>
                <Row className="my-4">
                    {books.map((book) => {
                        return <Col xs={6} md={4} lg={3} className="my-3" key={book.asin}>
                            <Card>
                                <Card.Img src={book.img} />
                                <Card.Body>
                                    <Card.Title>{book.title}</Card.Title>
                                    <Card.Text>
                                          €{book.price}
                                    </Card.Text>
                                    <Card.Text>{book.category}</Card.Text>
                                </Card.Body>
                            </Card>
                                </Col>
                    })}
                </Row>
            </Container>
        )
    }
}

export default AllTheBooks