import { ProductCard, CategoryList, HomePageFooter } from "@src/components/";
import { DummyProuductList } from "@src/Dummy/ProductList";
import { Container, Row } from "react-bootstrap";
import { HeaderDrawerHOC } from "@src/HOCs/";
import { subCategory } from "@src/constants/subCategory";
import classes from "./Listing.module.scss";
import router from "next/router";

const Listing: React.FC = () => {
  return (
    <>
      <Container className={classes.listingContainer}>
        <CategoryList categories={subCategory} />
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

export default HeaderDrawerHOC(Listing);
