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

const BlanketSize = () => {
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
              <InputGroup className="mb-3">
                <InputGroup.Text className="stitches">Stitches</InputGroup.Text>
                <Form.Control type="number" min="0" aria-label="stitches" />
                <InputGroup.Text className="rows">Rows</InputGroup.Text>
                <Form.Control type="number" min="0" aria-label="rows" />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text className="width">Width (cm)</InputGroup.Text>
                <Form.Control type="number" min="0" aria-label="Width" />
                <InputGroup.Text className="length">
                  Length (cm){" "}
                </InputGroup.Text>
                <Form.Control type="number" min="0" aria-label="Length" />
              </InputGroup>
              <p>Desired size of blanket</p>
              <InputGroup className="mb-3">
                <InputGroup.Text className="width">
                  Desired width (cm)
                </InputGroup.Text>
                <Form.Control type="number" min="0" aria-label="Width" />
                <InputGroup.Text className="length">
                  Desired length (cm)
                </InputGroup.Text>
                <Form.Control type="number" min="0" aria-label="length" />
              </InputGroup>
              <div className="text-center">
                <Button>Submit</Button>
              </div>
              <p>
                The total stitches and rows needed will show below in the form.
              </p>
              <InputGroup className="mb-3">
                <InputGroup.Text>Total stitches / rows</InputGroup.Text>
                <Form.Control disabled aria-label="total-stitches" />
                <Form.Control disabled aria-label="total-rows" />
              </InputGroup>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default BlanketSize;
