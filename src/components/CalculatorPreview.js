import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const CalculatorPreview = ({ link, imageUrl, title, url, text }) => {
  return (
    <Card>
      <Link to={link}>
        <Card.Img src={imageUrl} variant="top" />
      </Link>
      <Card.Body>
        <Link to={link}>
          <Card.Title title="title" className="title">
            {title}
          </Card.Title>
        </Link>
        <Card.Text text="text">{text}</Card.Text>
        <div className="text-center">
          <Link to={link} className="btn btn-secondary">
            Calculate
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CalculatorPreview;
