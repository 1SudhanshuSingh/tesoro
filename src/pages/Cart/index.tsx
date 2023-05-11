import {
  CartTotal,
  HomePageFooter,
  SecondaryProductCard,
} from "@src/components/";
import { DummyProductCartList } from "@src/Dummy/ProductList";
import { Col, Container, Row } from "react-bootstrap";
import { HeaderDrawerHOC } from "@src/HOCs/";
import classes from "./Cart.module.scss";
import { CartItems } from "@src/Dummy/CartTotal";

const Listing: React.FC = () => {
  return (
    <>
      <Container className={classes.listingContainer}>
        <h4>My Cart</h4>
        <Row>
          <Col md={8}>
            <Row>
              {DummyProductCartList.map((item) => {
                return (
                  <SecondaryProductCard
                    md={6}
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
          </Col>
          <Col>
            <CartTotal cartItems={CartItems} />
          </Col>
        </Row>
      </Container>
      <HomePageFooter />
    </>
  );
};

export default HeaderDrawerHOC(Listing);
