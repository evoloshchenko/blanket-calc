import { InputGroup } from "react-bootstrap";

import NumberInput from "../../components/NumberInput";

const InputForm = ({ stitches, setStitches, rows, setRows }) => {
  return (
    <>
      <InputGroup className="mb-3">
        <NumberInput
          label="Stitches"
          id="stitches"
          value={stitches}
          setValue={setStitches}
        />
        <NumberInput label="Rows" id="rows" value={rows} setValue={setRows} />
      </InputGroup>
      <InputGroup className="mb-3">
        <NumberInput />
        <NumberInput />
      </InputGroup>
    </>
  );
};

export default InputForm;
