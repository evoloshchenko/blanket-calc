import GridCards from "./GridCards";
import { Container, Row, Col } from "react-bootstrap";
//Styles
import "../styles/_cards.scss";

//Import Images
import blanketImg from "../img/blanket1.jpg";
import raglanImg from "../img/raglan.jpg";
import scarfImg from "../img/scarf.jpg";

function Cards() {
  return (
    <Container>
      <Row>
        <Col className="col-md-4">
          <GridCards imgsrc={blanketImg} />
        </Col>
        <Col className="col-md-4">
          <GridCards imgsrc={scarfImg} />
        </Col>
        <Col className="col-md-4">
          <GridCards imgsrc={raglanImg} />
        </Col>
      </Row>
    </Container>
  );
}

export default Cards;
