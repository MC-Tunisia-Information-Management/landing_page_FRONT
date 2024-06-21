import { Col, Row } from "react-bootstrap";
import Globe from "../../../Assets/Images/Globe.png";
import "../../../Assets/Scss/Homepage/AboutAIESEC.scss";

function AboutAIESEC() {
  return (
    <div className="AboutAIESEC">
      <Row className="innercontent justify-content-center">
        <Col sm={12} md={3}>
          <img className="globeImg" src={Globe} alt="Globe" />
        </Col>
        <Col sm={12} md={7}>
          <p className="title">About AIESEC</p>
          <p className="text">
            AIESEC is the world's largest youth-led organization and we are
            dedicated to providing young people with immersive, impactful
            intercultural exchange experiences. Since 1962, AIESEC Germany has sent volunteers to
            projects in almost 120 countries to work on issues such as
            education, healthcare and sustainability.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default AboutAIESEC;
