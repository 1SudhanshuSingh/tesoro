import classes from "./CustomButton.module.scss";

interface CustomButtonProps {
  title: string;
  type: "button" | "submit" | "reset" | undefined;
  design: "black" | "white";
  style: React.CSSProperties;
  onClick: () => void;
}
const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  type,
  design,
  style,
  onClick,
}) => {
  return (
    <button
      type={type}
      style={style}
      className={
        design === "black"
          ? classes.CustomButtonBlack
          : classes.CustomButtonWhite
      }
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
