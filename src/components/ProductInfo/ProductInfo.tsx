import { Col, Container, ListGroup, Placeholder, Row } from "react-bootstrap";
import {
  CustomButton,
  HomePageFooter,
  ProductCard,
  ProductImagesSlider,
} from "..";
import { DummyProuductList } from "@src/Dummy/ProductList";
import router from "next/router";
import AboutProduct from "./components/AboutProduct";
import ProductDetails from "./components/ProductDetailts";

const dummyImages: string[] = [
  "./products/p1.jpg",
  "./products/p2.jpg",
  "./products/p3.jpg",
  "./products/p4.jpg",
  "./products/p5.jpg",
];
const ProductInfo: React.FC = () => {
  return (
    <>
      <Container>
        <Row>
          <AboutProduct />
          <Col md={4}>
            <ProductImagesSlider images={dummyImages} />
          </Col>
          <ProductDetails />
        </Row>
      </Container>
      <Container>
        <h4>YOU MAY ALSO LIKE</h4>
        <Row>
          {DummyProuductList.map((item) => {
            return (
              <ProductCard
                onClick={() => router.push("/Product")}
                source={item.source}
                alt={item.alt}
                title={item.title}
                price={item.price}
                colors={item.colors}
                sizes={item.sizes}
              />
            );
          })}
        </Row>
      </Container>
      <HomePageFooter />
    </>
  );
};

export default ProductInfo;
