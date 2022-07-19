import {
  Card,
  Form,
  InputGroup,
  Button,
  CardImg,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import blanketIMG from "../img/blanket1.jpg";
//Import formulas for our calculating functions
import { calculateBlanketRows, calculateBlanketStitches } from "../formulas";
import {
  initialStitches,
  initialRows,
  initialWidth,
  initialLength,
  initialBlanketWidth,
  initialBlanketLength,
  initialTotalRows,
  iniatialTotalStitches,
} from "../constants";

const BlanketSize = () => {
  //State
  const [stitches, setStitches] = useState(0);
  const [rows, setRows] = useState(0);
  const [width, setWidth] = useState(0);
  const [length, setLength] = useState(0);
  const [desiredWidth, setDesiredWidth] = useState(0);
  const [desiredLength, setDesiredLength] = useState(0);
  const [totalStitches, setTotalStitches] = useState(0);
  const [totalRows, setTotalRows] = useState(0);

  //Calc functions
  //Calculate Stitches
  const calcStitches = () => {
    console.log("calc stitches");

    // Validate input
    if (stitches === 0 || width === 0) {
      alert("Please enter your valid stitches and rows");
      return;
    }

    // Calculate value
    const total = calculateBlanketStitches(stitches, width, desiredWidth);
    console.log(total);

    // Set state
    setTotalStitches(total);
  };
  //Calculate Rows
  const calcRows = () => {
    console.log("calc rows");

    if (rows === 0 || length === 0) {
      alert("Please enter your valid stitches and rows");
      return;
    }

    const total = calculateBlanketRows(rows, length, desiredLength);
    setTotalRows(total);
  };

  //The general function of calculation
  const calculate = (e) => {
    //Prevent submitting
    e.preventDefault();
    calcStitches();
    calcRows();
  };

  //Cleared button
  const resetCalc = () => {
    setStitches(initialStitches);
    setRows(initialRows);
    setWidth(initialWidth);
    setLength(initialLength);
    setDesiredLength(initialBlanketLength);
    setDesiredWidth(initialBlanketWidth);
    setTotalRows(initialTotalRows);
    setTotalStitches(iniatialTotalStitches);
  };

  return (
    <Container>
      <Card>
        <Row>
          <Col>
            <Card className="text-center">
              <div className="overflow">
                <img src={blanketIMG} alt="" />
              </div>
            </Card>
          </Col>
          <Col>
            <Card.Body>
              <Card.Title> Blanket Size Calculator</Card.Title>
              <Card.Text>
                Fill some info to get a total blanket size.{" "}
                <span>
                  But first, You should measure your knitted gauge in cm
                </span>
              </Card.Text>
              <div className="container">
                <div className="row">
                  <div className="col-md-12 d-flex justify-content-end">
                    <Button
                      onClick={resetCalc}
                      type="button"
                      className="btn btn-secondary"
                    >
                      Clear
                    </Button>
                  </div>
                </div>
              </div>
              <form>
                <InputGroup className="mb-3">
                  <InputGroup.Text className="stitches">
                    Stitches
                  </InputGroup.Text>
                  <Form.Control
                    type="number"
                    min="0"
                    value={stitches}
                    onChange={(e) => setStitches(e.target.value)}
                    aria-label="stitches"
                  />
                  <InputGroup.Text className="rows">Rows</InputGroup.Text>
                  <Form.Control
                    type="number"
                    min="0"
                    value={rows}
                    onChange={(e) => setRows(e.target.value)}
                    aria-label="rows"
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text className="width">
                    Width (cm)
                  </InputGroup.Text>
                  <Form.Control
                    type="number"
                    min="0"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    aria-label="Width"
                  />
                  <InputGroup.Text className="length">
                    Length (cm){" "}
                  </InputGroup.Text>
                  <Form.Control
                    type="number"
                    min="0"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    aria-label="Length"
                  />
                </InputGroup>
                <p>Desired size of blanket</p>
                <InputGroup className="mb-3">
                  <InputGroup.Text className="d-width">
                    Desired width (cm)
                  </InputGroup.Text>
                  <Form.Control
                    type="number"
                    min="0"
                    value={desiredWidth}
                    onChange={(e) => setDesiredWidth(e.target.value)}
                    aria-label="d-width"
                  />
                  <InputGroup.Text className="d-length">
                    Desired length (cm)
                  </InputGroup.Text>
                  <Form.Control
                    type="number"
                    min="0"
                    value={desiredLength}
                    onChange={(e) => setDesiredLength(e.target.value)}
                    aria-label="d-length"
                  />
                </InputGroup>
                <div className="text-center">
                  <Button className="calc" onClick={calculate}>
                    Calculate
                  </Button>
                </div>
                <p>
                  The total stitches and rows needed will show below in the
                  form.
                </p>
                <InputGroup className="mb-3">
                  <InputGroup.Text>Total stitches / rows</InputGroup.Text>
                  <Form.Control
                    disabled
                    aria-label="total-stitches"
                    value={totalStitches}
                  />
                  <Form.Control
                    disabled
                    aria-label="total-rows"
                    value={totalRows}
                  />
                </InputGroup>
              </form>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default BlanketSize;
