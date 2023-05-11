import { HeaderDrawerHOC } from "@src/HOCs";
import { ProductInfo } from "@src/components";
import classes from "./Product.module.scss";

const Product: React.FC = () => {
  return (
    <div className={classes.productContainer}>
      <ProductInfo />
    </div>
  );
};

export default HeaderDrawerHOC(Product);
