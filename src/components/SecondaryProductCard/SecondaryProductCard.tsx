import { Col, Image } from "react-bootstrap";
import { ColorCheckbox, IncrementDecrement } from "..";
import { IoBagAddOutline } from "react-icons/io5";

interface SecondaryProductCardProps {
  source: string[];
  alt: string;
  title: string;
  colors: string[];
  sizes: string[];
  price: number;
  wishlist?: boolean;
  md: number;
}
const SecondaryProductCard: React.FC<SecondaryProductCardProps> = ({
  source,
  alt,
  title,
  colors,
  sizes,
  price,
  wishlist,
  md,
}) => {
  return (
    <Col md={md} className="mb-4">
      {source.map((img) => (
        <Image src={img} alt={alt} className="img-fluid" />
      ))}
      <div className="d-flex justify-content-between">
        <div className="d-flex pt-3">
          <p className="me-2">Selected Color</p>
          <ColorCheckbox colors={colors} onColorChange={() => {}} />
          <p className="me-2">Selected Size</p>
          {sizes.map((size) => (
            <p className="font-weight-bold">{size}</p>
          ))}
        </div>
        {wishlist ? (
          <IoBagAddOutline size={24} onClick={() => {}} className="mt-3" />
        ) : (
          <IncrementDecrement initialValue={0} />
        )}
      </div>
      <div className="d-flex justify-content-between pb-3">
        <p>{title}</p>
        <p>&#8377; {price}</p>
      </div>
    </Col>
  );
};

export default SecondaryProductCard;
