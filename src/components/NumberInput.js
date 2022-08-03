import { Form, InputGroup } from "react-bootstrap";

export const NumberInput = ({
  label,
  value,
  setValue,
  id,
  disabled = false,
}) => {
  return (
    <>
      {label && <InputGroup.Text id={id}>{label}</InputGroup.Text>}
      <Form.Control
        type="number"
        min="0"
        value={value}
        disabled={disabled}
        onChange={(e) => setValue(parseInt(e.target.value))}
        aria-describedby={id}
      />
    </>
  );
};

export default NumberInput;
