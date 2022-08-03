import CalculatorPreview from "../components/CalculatorPreview";
import { Row, Container, Col } from "react-bootstrap";

//Import Images
import blanketImg from "../img/blanket1.jpg";
import raglanImg from "../img/raglan.jpg";
import scarfImg from "../img/scarf.jpg";
import socksImg from "../img/socks.jpg";

//Added a text for calculators
const BlanketText =
  "It will help you to figure out the desired size of blanket, and also how much stitches and rows you will need.";
const ScarfText =
  "If you already choose the yarn, and even knit some swatches, you can easily calculate the size of desired scarf.";
const RaglanText =
  "It will help you to understand how much stitches and rows you'll need for different parts of raglan sweater.";
const SocksText =
  "If for a long time you dreamt of perfect pair of knitting socks, so this calculator helps you to make it right.";

const HomePage = () => {
  return (
    <Container>
      <Row sm={3} className="g-4">
        <Col>
          <CalculatorPreview
            imageUrl={blanketImg}
            title="Blanket Calculator"
            text={BlanketText}
            url="/blanket"
          />
        </Col>
        <Col>
          <CalculatorPreview
            imageUrl={socksImg}
            title="Socks Calculator"
            text={SocksText}
            url="/socks"
          />
        </Col>
        <Col>
          <CalculatorPreview
            imageUrl={scarfImg}
            title="Scarf Calculator"
            text={ScarfText}
            url="/scarf"
          />
        </Col>
        <Col>
          <CalculatorPreview
            imageUrl={raglanImg}
            title="Raglan Calculator"
            text={RaglanText}
            url="/raglan"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
