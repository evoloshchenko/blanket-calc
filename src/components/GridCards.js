import { Card, Col, Row, Button } from "react-bootstrap";

function GridCards(props) {
  return (
    <Row xl={1} md={4} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img
              src={props.imgsrc}
              variant="top"
              // data-src="holder.js/100px160"
            />
            <Card.Body>
              <Card.Title className="title">Card Title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <div className="text-center">
                <Button variant="secondary">Go somewhere</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridCards;
