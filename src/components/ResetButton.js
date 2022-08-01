import { Button } from "react-bootstrap";

const ResetButton = ({ reset }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-end">
            <Button onClick={reset} type="button" className="btn btn-secondary">
              Clear
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetButton;
