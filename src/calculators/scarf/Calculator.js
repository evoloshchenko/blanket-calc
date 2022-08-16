import { useState } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
//Import for images
import DetailImage from "../../components/DetailImage";
import scarfImg from "../../img/scarf.jpg";
//Import buttons
import CalculateButton from "../../components/CalculateButton";
import ResetButton from "../../components/ResetButton";
//Import section of the page
import InputForm from "../scarf/InputForm";
import Results from "../scarf/Results";
//Import constants
import {
  INITIAL_STITCHES,
  INITIAL_ROWS,
  INITIAL_WIDTH,
  INITIAL_LENGTH,
  INITIAL_SCARF_WIDTH,
  INITIAL_SCARF_LENGTH,
} from "../../constants";

const Calculator = () => {
  //State
  const [stitches, setStitches] = useState(INITIAL_STITCHES);
  const [rows, setRows] = useState(INITIAL_ROWS);
  const [width, setWidth] = useState(INITIAL_WIDTH);
  const [length, setLength] = useState(INITIAL_LENGTH);
  const [desiredWidth, setDesiredWidth] = useState(INITIAL_SCARF_WIDTH);
  const [desiredLength, setDesiredLength] = useState(INITIAL_SCARF_LENGTH);
  const [totalStitches, setTotalStitches] = useState();
  const [totalRows, setTotalRows] = useState();

  return (
    <Container>
      <Card>
        <Row>
          <Col>
            <DetailImage id="scarf-image" image={scarfImg} alt="scarf-image" />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title>Scarf Calculator</Card.Title>
              <Card.Text>
                If you already pick up the yarn and pattern, and want to find
                out the size of desired scarf. You should knit a gauge (10*10
                cm) and measure it. Fill the form and calculate it!
              </Card.Text>
              <ResetButton />
              <div>
                <InputForm
                  stitches={stitches}
                  setStitches={setStitches}
                  rows={rows}
                  setRows={setRows}
                  width={width}
                  setWidth={setWidth}
                  length={length}
                  setLength={setLength}
                  desiredWidth={desiredWidth}
                  setDesiredWidth={setDesiredWidth}
                  desiredLength={desiredLength}
                  setDesiredLength={setDesiredLength}
                />
                <CalculateButton />
                <Results />
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Calculator;
