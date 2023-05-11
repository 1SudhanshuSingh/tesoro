import React, { useState } from "react";

interface ColorCheckboxProps {
  colors: string[];
  onColorChange: (selectedColors: string[]) => void;
}

const ColorCheckbox: React.FC<ColorCheckboxProps> = ({
  colors,
  onColorChange,
}) => {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const color = e.target.value;
    if (e.target.checked) {
      setSelectedColors((prevSelectedColors) => [...prevSelectedColors, color]);
    } else {
      setSelectedColors((prevSelectedColors) =>
        prevSelectedColors.filter((c) => c !== color)
      );
    }
    onColorChange(selectedColors);
  };

  const getDisplayedColors = () => {
    const maxColors = 3;
    const displayedColors = colors.slice(0, maxColors);
    const additionalColors = colors.slice(maxColors);

    return additionalColors.length > 0
      ? [...displayedColors, additionalColors.length]
      : displayedColors;
  };

  return (
    <div>
      {getDisplayedColors().map((color) => (
        <div
          key={color}
          style={{ display: "inline-block", marginRight: "10px" }}
        >
          {typeof color === "number" ? (
            <span>+{color} colors</span>
          ) : (
            <>
              <label
                style={{
                  display: "inline-block",
                  width: "15px",
                  height: "15px",
                  backgroundColor: color,
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  value={color}
                  checked={selectedColors.includes(color)}
                  onChange={handleCheckboxChange}
                  style={{ display: "none" }}
                />
              </label>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ColorCheckbox;
