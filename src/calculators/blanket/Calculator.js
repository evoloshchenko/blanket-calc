import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import blanketIMG from "../../img/blanket1.jpg";
import ResultForm from "./ResultForm";
import InputForm from "./InputForm";
//Import formulas for our calculating functions
import { calculateBlanketRows, calculateBlanketStitches } from "../../formulas";
//Import constants
import {
  INITIAL_STITCHES,
  INITIAL_ROWS,
  INITIAL_WIDTH,
  INITIAL_LENGTH,
  INITIAL_BLANKET_WIDTH,
  INITIAL_BLANKET_LENGTH,
} from "../../constants";

//Import animations
import { popup, imageAnimation } from "../../animations";
import { motion } from "framer-motion";
import CalculateButton from "../../components/CalculateButton";
import ResetButton from "../../components/ResetButton";

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

                <ResetButton reset={resetCalc} />

                <form>
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

                  <CalculateButton calculate={calculate} />

                  <ResultForm
                    totalStitches={totalStitches}
                    totalRows={totalRows}
                  />
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
