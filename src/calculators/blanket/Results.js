import { InputGroup } from "react-bootstrap";

import NumberInput from "../../components/NumberInput";

const Results = ({ totalStitches, totalRows }) => {
  return (
    <>
      <p>The total stitches and rows needed will show below in the form.</p>
      <InputGroup className="mb-3">
        <NumberInput
          label="Total stitches"
          id="total-stitches"
          disabled
          value={totalStitches}
        />
        <NumberInput id="total-rows" disabled value={totalRows} />
      </InputGroup>
    </>
  );
};

export default Results;
