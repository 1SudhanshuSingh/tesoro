import CustomButton from "@src/components/CustomButton/CustomButton";
import { Col, ListGroup, Placeholder } from "react-bootstrap";

const ProductDetails: React.FC = () => {
  return (
    <Col md={4}>
      <div className="mb-4">
        <h6>HIGH-RISE STRAIGHT TRF CARGO TROUSERS</h6>
        <h6>₹ 2,890.00</h6>
        <p className="text-muted">
          <small>MRP incl. of all taxes</small>
        </p>
        <p>
          <small>
            High-waist trousers with patch pockets on the sides and on the leg
            and false pockets with flaps on the back. Front zip fly and metal
            button fastening.
          </small>
        </p>
      </div>
      <div className="mb-4">
        <h6>AVAILABLE COLORS</h6>
        <Placeholder xs={1} bg="primary" />
        <Placeholder xs={1} bg="secondary" />
        <Placeholder xs={1} bg="success" />
        <Placeholder xs={1} bg="danger" />
        <Placeholder xs={1} bg="warning" />
        <Placeholder xs={1} bg="info" />
        <Placeholder xs={1} bg="light" />
        <Placeholder xs={1} bg="dark" />
      </div>
      <div className="mb-4">
        <ListGroup>
          <ListGroup.Item>EU 32 (UK 4)</ListGroup.Item>
          <ListGroup.Item>EU 33 (UK 4.5)</ListGroup.Item>
          <ListGroup.Item>EU 34 (UK 5)</ListGroup.Item>
          <ListGroup.Item>EU 35 (UK 2.5)</ListGroup.Item>
          <ListGroup.Item>EU 36 (UK 3.5)</ListGroup.Item>
          <ListGroup.Item>EU 37 (UK 4)</ListGroup.Item>
          <ListGroup.Item>EU 38 (UK 5)</ListGroup.Item>
          <ListGroup.Item>EU 39 (UK 6)</ListGroup.Item>
          <ListGroup.Item>EU 40 (UK 6.5)</ListGroup.Item>
        </ListGroup>
      </div>
      <div className="mb-4">
        <CustomButton
          title="ADD TO BAG"
          type="submit"
          style={{ marginTop: "1rem" }}
          onClick={() => {}}
          design="black"
        />
        <p className="mt-4">
          <small>
            CHECK IN-STORE AVAILABILITY DELIVERY, EXCHANGES AND RETURNS The
            “Check in-store availability” option is temporarily unavailable.
          </small>
        </p>
      </div>
    </Col>
  );
};

export default ProductDetails;
