import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const CalculatorPreview = ({ url, imageUrl, title, text }) => {
  return (
    <Card>
      <Link to={url}>
        <Card.Img src={imageUrl} variant="top" />
      </Link>
      <Card.Body>
        <Link to={url}>
          <Card.Title className="title">
            {title}
          </Card.Title>
        </Link>
        <Card.Text text="text">{text}</Card.Text>
        <div className="text-center">
          <Link to={url} className="btn btn-secondary">
            Calculate
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CalculatorPreview;
