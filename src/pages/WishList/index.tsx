import {
  HomePageFooter,
  SecondaryProductCard,
} from "@src/components/";
import { DummyProductCartList } from "@src/Dummy/ProductList";
import { Container, Row } from "react-bootstrap";
import { HeaderDrawerHOC } from "@src/HOCs/";
import classes from "./Cart.module.scss";

const Listing: React.FC = () => {
  return (
    <>
      <Container className={classes.listingContainer}>
        <h4>My WishList</h4>
        <Row>
          {DummyProductCartList.map((item) => {
            return (
              <SecondaryProductCard
                source={item.source}
                alt={item.alt}
                title={item.title}
                price={item.price}
                colors={item.colors}
                sizes={item.sizes}
                md={4}
                wishlist
              />
            );
          })}
        </Row>
      </Container>
      <HomePageFooter />
    </>
  );
};

export default HeaderDrawerHOC(Listing);
