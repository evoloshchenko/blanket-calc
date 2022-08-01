import { InputGroup } from "react-bootstrap";

import NumberInput from "../../components/NumberInput";

const InputForm = ({
  stitches,
  setStitches,
  rows,
  setRows,
  width,
  setWidth,
  length,
  setLength,
  desiredWidth,
  setDesiredWidth,
  desiredLength,
  setDesiredLength,
}) => {
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
        <NumberInput
          label="Width (cm)"
          id="width"
          value={width}
          setValue={setWidth}
        />

        <NumberInput
          label="Length (cm)"
          id="length"
          value={length}
          setValue={setLength}
        />
      </InputGroup>

      <p>Desired size of blanket</p>
      <InputGroup className="mb-3">
        <NumberInput
          label="Desired width (cm)"
          id="desired-width"
          value={desiredWidth}
          setValue={setDesiredWidth}
        />

        <NumberInput
          label="Desired length (cm)"
          id="desired-length"
          value={desiredLength}
          setValue={setDesiredLength}
        />
      </InputGroup>
    </>
  );
};

export default InputForm;
