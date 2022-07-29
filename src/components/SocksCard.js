//Here I have UI of SocksCard.

//Import formulas
import { calculateSocksStitches } from "../formulas";

import "../styles/_socksCard.scss";

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
import SocksIMG from "../img/socks.jpg";
//Import constants
import {
  INITIAL_STITCHES,
  INITIAL_ROWS,
  INITIAL_WIDTH,
  INITIAL_LENGTH,
  INITIAL_TOTAL_SOCKS_STITCHES,
  INITIAL_HEEL_STITCHES,
  INITIAL_GUSSET_STITCHES,
  INITIAL_HEEL_FLAP_STITCHES,
  INITIAL_INSTEP_STITCHES,
  INITIAL_REM_FLAP_STITCHES,
  INITIAL_NUM_STITCHES_BEFORE_PICK_HEEL_FLAP,
  INITIAL_PICK_HEEL_FLAP_STITCHES,
  INITIAL_HEEL_FLAP_LENGTH,
  INITIAL_DECREASE_GUSSET_STITCHES,
  INITIAL_SOCKS_LENGTH,
  INITIAL_DECREASE_TOE_STITCHES,
  INITIAL_TOE_ROWS,
  INITIAL_TOE_LENGTH,
  INITIAL_SIZE_FOOT,
  INITIAL_FOOT_CIRCUM,
  INITIAL_HEEL_DIAGONAL,
  INITIAL_CALF_CIRCUM,
} from "../constants";

const SocksCard = () => {
  //State
  const [stitches, setStitches] = useState(INITIAL_STITCHES);
  const [rows, setRows] = useState(INITIAL_ROWS);
  const [width, setWidth] = useState(INITIAL_WIDTH);
  const [length, setLength] = useState(INITIAL_LENGTH);
  const [sizeFoot, setSizeFoot] = useState(INITIAL_SIZE_FOOT);
  const [footCircum, setFootCircum] = useState(INITIAL_FOOT_CIRCUM);
  const [heelDiagonal, setHeelDiagonal] = useState(INITIAL_HEEL_DIAGONAL);
  const [calfCircum, setCalfCircum] = useState(INITIAL_CALF_CIRCUM);
  const [totalSocksStitches, setTotalSocksStitches] = useState(
    INITIAL_TOTAL_SOCKS_STITCHES
  );
  const [heelStitches, setHeelStitches] = useState(INITIAL_HEEL_STITCHES);
  const [gussetStitches, setGussetStitches] = useState(INITIAL_GUSSET_STITCHES);
  const [heelFlapStitches, setHeelFlapStitches] = useState(
    INITIAL_HEEL_FLAP_STITCHES
  );
  const [instepStitches, setInstepStitches] = useState(INITIAL_INSTEP_STITCHES);
  const [remFlapStitches, setRemFlapStitches] = useState(
    INITIAL_REM_FLAP_STITCHES
  );
  const [numStitchesBeforePickHeelFlap, setNumStitchesBeforePickHeelFlap] =
    useState(INITIAL_NUM_STITCHES_BEFORE_PICK_HEEL_FLAP);
  const [pickHeelFlapStitches, setPickHeelFlapStitches] = useState(
    INITIAL_PICK_HEEL_FLAP_STITCHES
  );
  const [heelFlapLength, setHeelFlapLength] = useState(
    INITIAL_HEEL_FLAP_LENGTH
  );
  const [decreaseGussetStitches, setDecreaseGussetStitches] = useState(
    INITIAL_DECREASE_GUSSET_STITCHES
  );
  const [socksLength, setSocksLength] = useState(INITIAL_SOCKS_LENGTH);
  const [decreaseToeStitches, setDecreaseToeStitches] = useState(
    INITIAL_DECREASE_TOE_STITCHES
  );
  const [toeRows, setToeRows] = useState(INITIAL_TOE_ROWS);
  const [toeLength, setToeLength] = useState(INITIAL_TOE_LENGTH);

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

  return (
    <div>
      <Container>
        <div className="socks-card p-3">
          <Row className="fill-data">
            <Col classname="img-component">
              <Card className="text-center">
                <div className="overflow">
                  <Card.Img src={SocksIMG} alt="socks_image" />
                </div>
              </Card>
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
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 d-flex justify-content-end">
                      <Button type="button" className="btn btn-secondary">
                        Clear
                      </Button>
                    </div>
                  </div>
                </div>
                <Form>
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
                      //   onChange={(e) => setRows(e.target.value)}
                      aria-label="rows"
                    />
                    <InputGroup.Text className="width">Width</InputGroup.Text>
                    <Form.Control
                      type="number"
                      min="0"
                      value={width}
                      //   onChange={(e) => setRows(e.target.value)}
                      aria-label="width"
                    />
                    <InputGroup.Text className="length">Length</InputGroup.Text>
                    <Form.Control
                      type="number"
                      min="0"
                      value={length}
                      //   onChange={(e) => setRows(e.target.value)}
                      aria-label="length"
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroup.Text className="sizeFoot">
                      Size Foot
                    </InputGroup.Text>
                    <Form.Control
                      type="number"
                      min="0"
                      value={sizeFoot}
                      //   onChange={(e) => setStitches(e.target.value)}
                      aria-label="sizeFoot"
                    />
                    <InputGroup.Text className="footCircum">
                      Foot Circumference
                    </InputGroup.Text>
                    <Form.Control
                      type="number"
                      min="0"
                      value={footCircum}
                      onChange={(e) => setFootCircum(e.target.value)}
                      aria-label="footCircum"
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroup.Text className="heelDiagonal">
                      Heel Diagonal
                    </InputGroup.Text>
                    <Form.Control
                      type="number"
                      min="0"
                      //   value={stitches}
                      //   onChange={(e) => setStitches(e.target.value)}
                      aria-label="heelDiagonal"
                    />
                    <InputGroup.Text className="calfCircum">
                      Calf Circumference
                    </InputGroup.Text>
                    <Form.Control
                      type="number"
                      min="0"
                      // value={rows}
                      //   onChange={(e) => setRows(e.target.value)}
                      aria-label="calfCircum"
                    />
                  </InputGroup>
                  <div className="text-center">
                    <Button className="calc" onClick={calculate}>
                      Calculate
                    </Button>
                  </div>
                  <p>
                    All calculations based on previously filled forms, and will
                    appear below. We divide it for some parts of sock.
                  </p>
                </Form>
              </Card.Body>
            </Col>
          </Row>
          <Row className="calculated-data">
            <Col>
              <div className="text-center">
                <h4 className="font-weight-bold">The Cuff</h4>
              </div>
              <p>
                This form will show us the total number of stitches that we
                should cast on.
              </p>
              <InputGroup className="mb-3">
                <InputGroup.Text>Total Socks Stitches</InputGroup.Text>
                <Form.Control
                  disabled
                  aria-label="total-socks-stitches"
                  value={totalSocksStitches}
                />
              </InputGroup>
              <div className="text-center">
                <h4 className="font-weight-bold">Heel Flap</h4>
              </div>
              <p className="text-left">
                Here we can see the info for knitting perfect heel flap
              </p>
              <InputGroup className="mb-3">
                <InputGroup.Text>Heel Stitches</InputGroup.Text>
                <Form.Control
                  disabled
                  aria-label="heel-stitches"
                  // value={totalStitches}
                />
                <InputGroup.Text>Gusset Stitches</InputGroup.Text>
                <Form.Control
                  disabled
                  aria-label="gusset-stitches"
                  // value={totalStitches}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text>Heel Flap Stitches</InputGroup.Text>
                <Form.Control
                  disabled
                  aria-label="heel-flap-stitches"
                  // value={totalStitches}
                />
                <InputGroup.Text>Instep Stitches</InputGroup.Text>
                <Form.Control
                  disabled
                  aria-label="instep-stitches"
                  // value={totalStitches}
                />
              </InputGroup>
              <p>Number of stitches to pick up for sides of heel flap.</p>
              <InputGroup className="mb-3">
                <InputGroup.Text>Pick Heel Flap Stitches</InputGroup.Text>
                <Form.Control
                  disabled
                  aria-label="pick-heel-flap-stitches"
                  // value={totalStitches}
                />
                <InputGroup.Text>Heel Flap Length</InputGroup.Text>
                <Form.Control
                  disabled
                  aria-label="heel-flap-length"
                  // value={totalStitches}
                />
              </InputGroup>
            </Col>
            <Col>
              <div className="text-center">
                <h4 className="font-weight-bold">Gusset</h4>
              </div>
              <p>Number of stitches to decrease extra gusset stitches.</p>
              <InputGroup className="mb-3">
                <InputGroup.Text>Decrease Gusset Stitches</InputGroup.Text>
                <Form.Control
                  disabled
                  aria-label="decrease-gusset-stitches"
                  // value={totalStitches}
                />
              </InputGroup>
              <div className="text-center">
                <h4 className="font-weight-bold">Toe</h4>
              </div>
              <InputGroup className="mb-3">
                <InputGroup.Text>Socks Length</InputGroup.Text>
                <Form.Control
                  disabled
                  aria-label="socks-length"
                  // value={totalStitches}
                />
              </InputGroup>
              <p>How much stitches to decrease for making a toe.</p>
              <InputGroup className="mb-3">
                <InputGroup.Text>Decrease Toe Stitches</InputGroup.Text>
                <Form.Control
                  disabled
                  aria-label="decrease-toe-stitches"
                  // value={totalStitches}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text>Toe Rows</InputGroup.Text>
                <Form.Control
                  disabled
                  aria-label="toe-rows"
                  // value={totalStitches}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text>Toe Length</InputGroup.Text>
                <Form.Control
                  disabled
                  aria-label="toe-length"
                  // value={totalStitches}
                />
              </InputGroup>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default SocksCard;
