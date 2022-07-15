import {
  Button,
  Alert,
  Breadcrumb,
  Card,
  Form,
  Container,
  InputGroup,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const BlanketSize = () => {
  return (
    <>
      <Card className="calc" style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title> Blanket Size Calculator</Card.Title>
          <Card.Text>
            Fill some info to get a total blanket size.{" "}
            <span>But first, You should measure your knitted gauge in cm</span>
          </Card.Text>
          <InputGroup className="mb-3">
            <InputGroup.Text className="rows">Rows</InputGroup.Text>
            <Form.Control aria-label="rows" />
            <InputGroup.Text className="stitches">Stitches</InputGroup.Text>
            <Form.Control aria-label="stitches" />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text className="width">Width (cm)</InputGroup.Text>
            <Form.Control aria-label="Width" />
            <InputGroup.Text className="length">Length (cm) </InputGroup.Text>
            <Form.Control aria-label="Length" />
          </InputGroup>
          <p>Desired size of blanket</p>
          <InputGroup className="mb-3">
            <InputGroup.Text className="width">
              {" "}
              Desired blanket width (cm)
            </InputGroup.Text>
            <Form.Control aria-label="Width" />
            <InputGroup.Text className="length">
              Desired blanket length (cm){" "}
            </InputGroup.Text>
            <Form.Control aria-label="length" />
          </InputGroup>
        </Card.Body>
      </Card>
    </>
  );
};

export default BlanketSize;
