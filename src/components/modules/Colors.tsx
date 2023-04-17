import React, { FC, useEffect } from "react";
import { ColorProps } from "../core/_models";

const Colors: FC<ColorProps> = ({
  color,
  product,
  onMouseOver,
  onMouseOut,
  num,
}) => {
  return (
    <div
      className="colors-container"
      onMouseOver={() => onMouseOver(num)}
      onMouseOut={onMouseOut}
    >
      <div className="colors-bg-color" style={{ backgroundColor: color }} />
      <span className="colors-code-copy">Color Copied!</span>
      <span className="colors-color-code">{color}</span>
      <span className="colors-product-name">{product.name}</span>
    </div>
  );
};

export default Colors;
