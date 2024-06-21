import { Col, Row } from "react-bootstrap";
import "../../../../Assets/Scss/GlobalTeacher/InfoGTe.scss";
import GTeExperience from "../../../../Assets/Images/GTeExperience.png";
import GTeDevelop from "../../../../Assets/Images/GTeDevelop.png";
import GTeExpand from "../../../../Assets/Images/GTeExpand.png";

function InfoGTe() {
  return (
    <div className="InfoGTe">
      <Row>
        <Col className="infoBlock discover" md={4} sm={12}>
          <img
            src={GTeExperience}
            alt="Global teacher International experience"
          />
          <p className="title">GAIN VALUABLE EXPERIENCE ABROAD</p>
          <p className="content">
            Expand your horizons through experiences in a new intercultural
            environment and be an asset to the school or teaching institution in
            which you will work.
          </p>
        </Col>
        <Col className="infoBlock" md={4} sm={12}>
          <img src={GTeDevelop} alt="Global volunteer discover" />
          <p className="title">DEVELOP YOURSELF PERSONALLY</p>
          <p className="content">
            Our partners are committed to ensuring you have a valuable
            experience that differentiates you from others and moves you
            forward.
          </p>
        </Col>
        <Col className="infoBlock challenge" md={4} sm={12}>
          <img src={GTeExpand} alt="Global volunteer discover" />
          <p className="title">EXPAND YOUR PROFESSIONAL SKILLS</p>
          <p className="content">
            Strengthen your teaching skills and personal skills through
            practical experience.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default InfoGTe;
