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
//Import constants
import {
  INITIAL_STITCHES,
  INITIAL_ROWS,
  INITIAL_WIDTH,
  INITIAL_LENGTH,
  INITIAL_BLANKET_WIDTH,
  INITIAL_BLANKET_LENGTH,
} from "../constants";

//Import animations
import { popup, imageAnimation, whileHover } from "../animations";
import { motion } from "framer-motion";
import { NumberInput } from "./NumberInput";

const BlanketSize = () => {
  //State
  const [stitches, setStitches] = useState(INITIAL_STITCHES);
  const [rows, setRows] = useState(INITIAL_ROWS);
  const [width, setWidth] = useState(INITIAL_WIDTH);
  const [length, setLength] = useState(INITIAL_LENGTH);
  const [desiredWidth, setDesiredWidth] = useState(INITIAL_BLANKET_WIDTH);
  const [desiredLength, setDesiredLength] = useState(INITIAL_BLANKET_LENGTH);
  const [totalStitches, setTotalStitches] = useState();
  const [totalRows, setTotalRows] = useState();

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
    setStitches(0);
    setRows(0);
    setWidth(0);
    setLength(0);
    setDesiredLength(0);
    setDesiredWidth(0);
    setTotalRows("");
    setTotalStitches("");
  };

  return (
    <motion.div variants={popup} initial="hidden" animate="show">
      <Container>
        <Card>
          <Row>
            <Col>
              <div className="text-center">
                <div className="overflow">
                  <motion.img
                    variants={imageAnimation}
                    initial="hidden"
                    animate="show"
                    src={blanketIMG}
                    alt="blanket_image"
                  />
                </div>
              </div>
            </Col>
            <Col>
              <Card.Body>
                <Card.Title>
                  <h1>Blanket Size Calculator</h1>
                </Card.Title>
                <Card.Text>
                  Fill some info to get a total blanket size.
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
                    <NumberInput
                      label="Stitches"
                      id="stitches"
                      value={stitches}
                      setValue={setStitches}
                    />
                    <NumberInput
                      label="Rows"
                      id="rows"
                      value={rows}
                      setValue={setRows}
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
                    <motion.div
                      variants={whileHover}
                      initial="hidden"
                      animate="show"
                    >
                      <Button className="calc" onClick={calculate}>
                        Calculate
                      </Button>
                    </motion.div>
                  </div>
                  <p>
                    The total stitches and rows needed will show below in the
                    form.
                  </p>
                  <InputGroup className="mb-3">
                    <NumberInput
                      label="Total stitches"
                      id="total-stitches"
                      disabled
                      value={totalStitches}
                    />
                    <NumberInput
                      id="total-rows"
                      disabled
                      value={totalRows}
                    />
                  </InputGroup>
                </form>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </motion.div>
  );
};

export default BlanketSize;
