import { InputGroup, Col, Row, Form } from "react-bootstrap";
import NumberInput from "../../components/NumberInput";

const Results = ({
  totalSocksStitches,
  heelStitches,
  gussetStitches,
  heelFlapStitches,
  instepStitches,
  remFlapStitches,
  numStitchesBeforePickHeelFlap,
  pickHeelFlapStitches,
  heelFlapLength,
  decreaseGussetStitches,
  socksLength,
  decreaseToeStitches,
  toeRows,
  toeLength,
}) => {
  return (
    <>
      <Col>
        <div className="text-center">
          <h4 className="font-weight-bold">The Cuff</h4>
        </div>
        <p>
          This form will show us the total number of stitches that we should
          cast on.
        </p>
        <InputGroup className="mb-3">
          <NumberInput
            label="Total socks stitches"
            id="total--socks-stitches"
            disabled
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
          <NumberInput
            label="Gusset Stitches"
            id="gusset-stitches"
            disabled
            value={gussetStitches}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <NumberInput
            label="Heel Flap Stitches"
            id="heel-flap-stitches"
            disabled
            value={heelFlapStitches}
          />
          <NumberInput
            label="Instep Stitches"
            id="instep-stitches"
            disabled
            value={instepStitches}
          />
        </InputGroup>
        <p>Number of stitches to pick up for sides of heel flap.</p>
        <InputGroup className="mb-3">
          <NumberInput
            label="Pick Heel Flap Stitches"
            id="pick-heel-flap-stitches"
            disabled
            value={pickHeelFlapStitches}
          />
          <NumberInput
            label="Heel Flap Length (cm)"
            id="heel-flap-length"
            disabled
            value={heelFlapLength}
          />
        </InputGroup>
      </Col>
      <Col>
        <div className="text-center">
          <h4 className="font-weight-bold">Gusset</h4>
        </div>
        <p>Number of stitches to decrease extra gusset stitches.</p>
        <InputGroup className="mb-3">
          <NumberInput
            label="Decrease Gusset Stitches"
            id="decrease-gusset-stitches"
            disabled
            value={decreaseGussetStitches}
          />
        </InputGroup>
        <div className="text-center">
          <h4 className="font-weight-bold">Toe</h4>
        </div>
        <InputGroup className="mb-3">
          <NumberInput
            label="Socks Length"
            id="socks-length"
            disabled
            value={socksLength}
          />
        </InputGroup>
        <p>How much stitches to decrease for making a toe.</p>
        <InputGroup className="mb-3">
          <NumberInput
            label="Decrease Toe Stitches"
            id="decrease-toe-stitches"
            disabled
            value={decreaseToeStitches}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <NumberInput
            label="Toe Rows"
            id="toe-rows"
            disabled
            value={toeRows}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <NumberInput
            label="Toe Length"
            id="toe-length"
            disabled
            value={toeLength}
          />
        </InputGroup>
      </Col>
    </>
  );
};

export default Results;
