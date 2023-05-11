import React, { useState } from "react";
import classes from "./IncrementDecrement.module.scss";

interface IncrementDecrementProps {
  initialValue: number;
}

const IncrementDecrement: React.FC<IncrementDecrementProps> = ({
  initialValue,
}) => {
  const [value, setValue] = useState<number>(initialValue);

  const handleIncrement = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const handleDecrement = () => {
    if (value > 0) {
      setValue((prevValue) => prevValue - 1);
    }
  };

  return (
    <div className={classes.incrementDecrement}>
      <button onClick={handleDecrement}>-</button>
      <span>{value}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default IncrementDecrement;
