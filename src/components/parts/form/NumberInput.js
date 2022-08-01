import { Form, InputGroup } from "react-bootstrap";

export const NumberInput = ({ label, value, setValue, id }) => {
  return (
    <>
      <InputGroup.Text id={id}>{label}</InputGroup.Text>
      <Form.Control
        type="number"
        min="3"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        aria-describedby={id}
      />
    </>
  );
};
