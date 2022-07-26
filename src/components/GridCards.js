import { Card, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
              <Card.Title className="title">{props.title}</Card.Title>
              <Card.Text> {props.text}</Card.Text>
              <div className="text-center">
                {/* <Button href={props.link} variant="secondary">
                  Calculate
                </Button> */}
                <Link to={props.link} className="btn btn-secondary">
                  Calculate
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridCards;
