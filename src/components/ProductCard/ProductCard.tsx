import { Col, Image, ListGroup } from "react-bootstrap";
import { ColorCheckbox, ImagesOnHover } from "@src/components";
import { IoHeartCircleOutline } from "react-icons/io5";
import classes from "./ProductCard.module.scss";

interface ProductCardProps {
  source: string[];
  alt: string;
  title: string;
  price: number;
  colors: string[];
  sizes: string[];
  onClick: () => void;
}
const ProductCard: React.FC<ProductCardProps> = ({
  source,
  alt,
  title,
  price,
  colors,
  sizes,
  onClick,
}) => {
  return (
    <Col md={4} onClick={onClick}>
      <div className={classes.imageContainer}>
        <ImagesOnHover images={source} alt={alt} />
        <IoHeartCircleOutline size={32} className={classes.heartBtn} />
      </div>
      <div className="d-flex justify-content-between pt-3">
        <ColorCheckbox colors={colors} onColorChange={() => {}} />
        <ListGroup horizontal>
          {sizes.map((size) => (
            <ListGroup.Item>{size}</ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="d-flex justify-content-between pt-2 pb-3">
        <p>{title}</p>
        <p>&#8377; {price}</p>
      </div>
    </Col>
  );
};
export default ProductCard;
