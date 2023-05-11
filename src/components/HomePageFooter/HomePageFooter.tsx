import { Col, Container, Row } from "react-bootstrap";
import classes from "./HomePageFooter.module.scss";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import { IoStorefrontOutline } from "react-icons/io5";

const HomePageFooter: React.FC = () => {
  return (
    <div className={classes.footerContainer}>
      <Container>
        <h4 className="mb-5">JOIN OUR NEWSLETTER</h4>
        <Row>
          <Col md>
            <FaInstagram className={classes.icons} />
            INSTAGRAM
          </Col>
          <Col md>
            <FaTwitter className={classes.icons} />
            TWITTER
          </Col>
          <Col md>
            <FaPinterest className={classes.icons} />
            PINTEREST
          </Col>
          <Col md>
            <FaYoutube className={classes.icons} />
            YOUTUBE
          </Col>
          <Col md>
            <IoStorefrontOutline className={classes.icons} />
            STORES
          </Col>
          <small className="d-block mt-5">
            Dummy Address, Block A, New Delhi, 110001
          </small>
        </Row>
      </Container>
    </div>
  );
};

export default HomePageFooter;
