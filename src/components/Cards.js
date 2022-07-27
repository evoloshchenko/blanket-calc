import GridCards from "./GridCards";
import { Container, Row, Col } from "react-bootstrap";
//Router
import { Link } from "react-router-dom";
//Styles
import "../styles/_cards.scss";

//Import Images
import blanketImg from "../img/blanket1.jpg";
import raglanImg from "../img/raglan.jpg";
import scarfImg from "../img/scarf.jpg";
import socksImg from "../img/socks.jpg";

//Added a text for calculators
const BlanketText =
  "This calculator will help you to figure out the desired size of blanket, and also how much stitches and rows you will need.";
const ScarfText =
  "If you already choose the yarn, and even knit some swatches, you can easily calculate the size of desired scarf.";
const RaglanText =
  "It will help you to understand how much stitches and rows you'll need for different parts of raglan sweater.";
const SocksText =
  "If for a long time you dreamt of perfect pair of knitting socks, so this calculator helps you to make it right.";

function Cards() {
  return (
    <Container>
      <Row>
        <Col className="col-md-4">
          <GridCards
            imgsrc={blanketImg}
            title="Blanket Calculator"
            text={BlanketText}
            link="/blanket"
          />
        </Col>
        <Col className="col-md-4">
          <GridCards
            imgsrc={socksImg}
            title="Socks Calculator"
            text={SocksText}
            link="/socks"
          />
        </Col>
        <Col className="col-md-4">
          <GridCards
            imgsrc={scarfImg}
            title="Scarf Calculator"
            text={ScarfText}
            link="/scarf"
          />
        </Col>
        <Col className="col-md-4">
          <GridCards
            imgsrc={raglanImg}
            title="Raglan Calculator"
            text={RaglanText}
            link="/raglan"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Cards;
