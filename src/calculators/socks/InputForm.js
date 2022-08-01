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
  sizeFoot,
  setSizeFoot,
  footCircum,
  setFootCircum,
  heelDiagonal,
  setHeelDiagonal,
  calfCircum,
  setCalfCircum,
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
      <InputGroup className="mb-3">
        <NumberInput
          label="Size Foot (EU)"
          id="size-foot"
          value={sizeFoot}
          setValue={setSizeFoot}
        />
        <NumberInput
          label="Foot Circumference (cm)"
          id="foot-circumference"
          value={footCircum}
          setValue={setFootCircum}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <NumberInput
          label="Heel Diagonal (cm)"
          id="heel-diagonal"
          value={heelDiagonal}
          setValue={setHeelDiagonal}
        />
        <NumberInput
          label="Calf Circumference (cm)"
          id="calf-circumference"
          value={calfCircum}
          setValue={setCalfCircum}
        />
      </InputGroup>
    </>
  );
};

export default InputForm;
