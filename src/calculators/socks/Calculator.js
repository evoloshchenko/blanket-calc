//Import parts of this component
import InputForm from "./InputForm";
import Results from "./Results";
import CalculateButton from "../../components/CalculateButton";
import ResetButton from "../../components/ResetButton";
import DetailImage from "../../components/DetailImage";

//Import Animation
import { motion } from "framer-motion";
import { imageAnimation } from "../../animations";

//Import formulas
import { calculateSocksStitches } from "../../formulas";

//Styles
import "../../styles/_socksCard.scss";

import { useState } from "react";
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

//Import image
import SocksIMG from "../../img/socks.jpg";
//Import constants
import {
  INITIAL_GAUGE_STITCHES,
  INITIAL_GAUGE_ROWS,
  INITIAL_GAUGE_WIDTH,
  INITIAL_GAUGE_LENGTH,
  INITIAL_SIZE_FOOT,
  INITIAL_FOOT_CIRCUM,
  INITIAL_HEEL_DIAGONAL,
  INITIAL_CALF_CIRCUM,
} from "../../constants";

const SocksCard = () => {
  //State
  const [stitches, setStitches] = useState(INITIAL_GAUGE_STITCHES);
  const [rows, setRows] = useState(INITIAL_GAUGE_ROWS);
  const [width, setWidth] = useState(INITIAL_GAUGE_WIDTH);
  const [length, setLength] = useState(INITIAL_GAUGE_LENGTH);
  const [sizeFoot, setSizeFoot] = useState(INITIAL_SIZE_FOOT);
  const [footCircum, setFootCircum] = useState(INITIAL_FOOT_CIRCUM);
  const [heelDiagonal, setHeelDiagonal] = useState(INITIAL_HEEL_DIAGONAL);
  const [calfCircum, setCalfCircum] = useState(INITIAL_CALF_CIRCUM);
  const [totalSocksStitches, setTotalSocksStitches] = useState();
  const [heelStitches, setHeelStitches] = useState();
  const [gussetStitches, setGussetStitches] = useState();
  const [heelFlapStitches, setHeelFlapStitches] = useState();
  const [instepStitches, setInstepStitches] = useState();
  const [remFlapStitches, setRemFlapStitches] = useState();
  const [numStitchesBeforePickHeelFlap, setNumStitchesBeforePickHeelFlap] =
    useState();
  const [pickHeelFlapStitches, setPickHeelFlapStitches] = useState();
  const [heelFlapLength, setHeelFlapLength] = useState();
  const [decreaseGussetStitches, setDecreaseGussetStitches] = useState();
  const [socksLength, setSocksLength] = useState();
  const [decreaseToeStitches, setDecreaseToeStitches] = useState();
  const [toeRows, setToeRows] = useState();
  const [toeLength, setToeLength] = useState();

  const calcSocksStitches = () => {
    //Validate input
    if (stitches === 0 || footCircum === 0) {
      alert("Please enter your valid stitches and rows");
      return;
    }
    //Calculate value
    const total = calculateSocksStitches(stitches, footCircum);
    console.log(total);
    //Set State
    setTotalSocksStitches(total);
  };

  //The general function of calculation
  const calculate = (e) => {
    //Prevent submitting
    e.preventDefault();
    calcSocksStitches();
  };

  //Reset Button
  const resetCalc = () => {
    setStitches(0);
    setRows(0);
    setWidth(0);
    setLength(0);
    setSizeFoot(0);
    setFootCircum(0);
    setHeelDiagonal(0);
    setCalfCircum(0);
    setTotalSocksStitches("");
    setHeelStitches("");
    setGussetStitches("");
    setHeelFlapStitches("");
    setInstepStitches("");
    setRemFlapStitches("");
    setNumStitchesBeforePickHeelFlap("");
    setPickHeelFlapStitches("");
    setHeelFlapLength("");
    setDecreaseGussetStitches("");
    setSocksLength("");
    setDecreaseToeStitches("");
    setToeRows("");
    setToeLength("");
  };

  return (
    <div>
      <Container>
        <div className="socks-card p-3">
          <Row className="fill-data">
            <Col>
              <DetailImage
                id="socks-image"
                image={SocksIMG}
                alt="socks-image"
              />
            </Col>
            <Col>
              <Card.Body>
                <Card.Title>Cuff-Down Socks Calculator</Card.Title>
                <Card.Text>
                  Fill some info to get a total socks calculation.{" "}
                  <span>
                    But first you should pick yarn and ornament, knit some gauge
                    - 10*10cm, and than measure your stitches and rows. If your
                    gauge bigger than standart one, you can use our poles, and
                    find out your fabric density, and use all calculation for
                    knitting the cuff-down socks.
                  </span>
                </Card.Text>
                <ResetButton reset={resetCalc} />
                <Form>
                  <InputForm
                    stitches={stitches}
                    setStitches={setStitches}
                    rows={rows}
                    setRows={setRows}
                    width={width}
                    setWidth={setWidth}
                    length={length}
                    setLength={setLength}
                    sizeFoot={sizeFoot}
                    setSizeFoot={setSizeFoot}
                    heelDiagonal={heelDiagonal}
                    setHeelDiagonal={setHeelDiagonal}
                    footCircum={footCircum}
                    setFootCircum={setFootCircum}
                    calfCircum={calfCircum}
                    setCalfCircum={setCalfCircum}
                  />
                  <CalculateButton calculate={calculate} />
                  <p>
                    All calculations based on previously filled forms, and will
                    appear below. We divide it for some parts of sock.
                  </p>
                </Form>
              </Card.Body>
            </Col>
          </Row>
          <Row>
            <Results
              totalSocksStitches={totalSocksStitches}
              heelStitches={heelStitches}
              gussetStitches={gussetStitches}
              heelFlapStitches={heelFlapStitches}
              instepStitches={instepStitches}
              remFlapStitches={remFlapStitches}
              numStitchesBeforePickHeelFlap={numStitchesBeforePickHeelFlap}
              pickHeelFlapStitches={pickHeelFlapStitches}
              heelFlapLength={heelFlapLength}
              decreaseGussetStitches={decreaseGussetStitches}
              socksLength={socksLength}
              decreaseToeStitches={decreaseToeStitches}
              toeRows={toeRows}
              toeLength={toeLength}
            />
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default SocksCard;
