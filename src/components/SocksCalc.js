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
} from "../constants";

const SocksCalc = () => {
  //State
  const [stitches, setStitches] = useState(INITIAL_STITCHES);
  const [rows, setRows] = useState(INITIAL_ROWS);
  const [width, setWidth] = useState(INITIAL_WIDTH);
  const [length, setLength] = useState(INITIAL_LENGTH);
  return (
    <div>
      <Container>
        <Card>
          <Row>
            <Col>
              <Card className="text-center">
                <div className="overflow">
                  <Card.Img src={SocksIMG} alt="socks_image" />
                </div>
              </Card>
            </Col>
            <Col>
              <Card.Body>
                <Card.Title>Socks Calculator</Card.Title>
                <Card.Text>
                  Fill some info to get a total socks calculation.{" "}
                  <span>
                    {" "}
                    But first you should pick yarn and ornament, knit some gauge
                    - 10*10cm, and than measure your stitches and rows. If your
                    gauge bigger than standart one, you can use out poles, and
                    find out your fabric density.
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
                      //   onChange={(e) => setStitches(e.target.value)}
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
                      value={rows}
                      //   onChange={(e) => setRows(e.target.value)}
                      aria-label="width"
                    />
                    <InputGroup.Text className="length">Length</InputGroup.Text>
                    <Form.Control
                      type="number"
                      min="0"
                      value={rows}
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
                      //   value={stitches}
                      //   onChange={(e) => setStitches(e.target.value)}
                      aria-label="sizeFoot"
                    />
                    <InputGroup.Text className="footCircum">
                      Foot Circumference
                    </InputGroup.Text>
                    <Form.Control
                      type="number"
                      min="0"
                      //   value={rows}
                      //   onChange={(e) => setRows(e.target.value)}
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
                      value={rows}
                      //   onChange={(e) => setRows(e.target.value)}
                      aria-label="calfCircum"
                    />
                  </InputGroup>
                </Form>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default SocksCalc;
