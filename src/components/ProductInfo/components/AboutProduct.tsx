import { Col } from "react-bootstrap";

const AboutProduct: React.FC = () => {
  return (
    <Col md={4} className="my-auto">
      <h4 className="mb-5">COMPOSITION, CARE & RETURN/REPLACEMENT</h4>
      <div className="mb-4">
        <h6>COMPOSITION</h6>
        <p>
          We work with monitoring programmes to ensure compliance with our
          social, environmental and health and safety standards for our
          garments. To assess compliance, we have developed a programme of
          audits and continuous improvement plans.
        </p>
      </div>
      <div className="mb-4">
        <h6>OUTER SHELL</h6>
        <p>100% cotton</p>
      </div>
      <div className="mb-4">
        <h6>CARE</h6>
        <p>
          Caring for your clothes is caring for the environment. To lengthen the
          life of denim garments, always turn them inside out and wash at low
          temperatures. This will help you preserve their colours and the
          structure of the fabric, as well as reduce energy consumption.
        </p>
      </div>
      <div className="mb-4">
        <h6>RETURN/REPLACEMENT</h6>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum id nulla
          placeat impedit error hic repellat dignissimos quaerat facilis
          exercitationem, quisquam nemo accusamus ex omnis voluptatum distinctio
          reiciendis. Excepturi, iure?
        </p>
      </div>
    </Col>
  );
};
export default AboutProduct;
