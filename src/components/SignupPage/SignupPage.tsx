import { Slide } from "react-awesome-reveal";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import CustomButton from "../CustomButton/CustomButton";

interface SignupProps {
  onClickShow: (isVisible: boolean) => void;
}

const SignupPage: React.FC<SignupProps> = ({ onClickShow }) => {
  return (
    <Slide>
      <Container>
        <Row>
          <Col md={6}>
            <h4>PERSONAL DETAILS</h4>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="my-3"
            >
              <Form.Control type="email" placeholder="Enter Email" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Password"
              className="my-3"
            >
              <Form.Control type="password" placeholder="Enter Password" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Retype Password">
              <Form.Control type="password" placeholder="Retype Password" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Name"
              className="my-3"
            >
              <Form.Control type="text" placeholder="Enter Name" />
            </FloatingLabel>
            <CustomButton
              title="SING UP"
              type="submit"
              style={{ marginTop: "1rem" }}
              onClick={() => {}}
              design="black"
            />
            <CustomButton
              title="BACK TO LOGIN"
              type="submit"
              style={{ marginTop: "1rem" }}
              onClick={() => onClickShow(false)}
              design="white"
            />
          </Col>
          <Col md={6} className="my-auto py-5">
            <h1>Get ready to turn heads with our fashion-forward collection</h1>
          </Col>
        </Row>
      </Container>
    </Slide>
  );
};

export default SignupPage;
