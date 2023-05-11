import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-light mt-auto">
      <Container>
        <Row>
          <Col md={4} className="my-4">
            <h5>About Us</h5>
            <p>
              We are a leading ecommerce platform providing top-quality products
              to customers around the world.
            </p>
          </Col>
          <Col md={4} className="my-4">
            <h5>Contact Us</h5>
            <p>
              123 Main Street
              <br />
              New York, NY 10001
              <br />
              Phone: (123) 456-7890
              <br />
              Email: info@ecommerce.com
            </p>
          </Col>
          <Col md={4} className="my-4">
            <h5>Follow Us</h5>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="bg-secondary text-light text-center py-3">
        <p>&copy; 2023 Ecommerce. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
