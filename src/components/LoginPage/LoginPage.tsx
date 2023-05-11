import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { Slide } from "react-awesome-reveal";
import {
  CustomButton,
  FacebookLoginButton,
  GoogleLoginButton,
} from "@src/components";

interface LoginPageProps {
  onClickShow: (isVisible: boolean) => void;
}
const LoginPage: React.FC<LoginPageProps> = ({ onClickShow }) => {
  return (
    <Slide>
      <Container>
        <Row>
          <Col md={6}>
            <h4>LOG IN TO YOUR ACCOUNT</h4>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="my-3"
            >
              <Form.Control type="email" placeholder="Enter Email" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control type="password" placeholder="Enter Password" />
            </FloatingLabel>
            <CustomButton
              title="LOGIN"
              type="submit"
              style={{ marginTop: "1rem" }}
              onClick={() => {}}
              design="black"
            />
            <h6 className="my-4 text-center font-weight-bold">OR</h6>
            <FacebookLoginButton onSuccess={() => {}} onFailure={() => {}} />
            <GoogleLoginButton onSuccess={() => {}} onFailure={() => {}} />
          </Col>
          <Col md={6}>
            <h4>NEED AN ACCOUNT?</h4>
            <CustomButton
              title="SIGN UP"
              type="button"
              style={{ marginTop: "1rem" }}
              onClick={() => onClickShow(true)}
              design="white"
            />
          </Col>
        </Row>
      </Container>
    </Slide>
  );
};

export default LoginPage;
