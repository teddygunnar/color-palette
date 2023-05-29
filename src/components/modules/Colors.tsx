import React, { CSSProperties, FC, useEffect } from "react";
import { ColorProps } from "../core/_models";

const Colors: FC<ColorProps> = ({
  color,
  product,
  onMouseOver,
  onMouseOut,
  handleOpenModal,
  num,
}) => {
  return (
    <div
      className="colors-container"
      onMouseOver={() => onMouseOver(num)}
      onMouseOut={onMouseOut}
      onClick={() => handleOpenModal(num)}
    >
      <div className="colors-bg-color" style={{ '--color': color } as CSSProperties} />
      <span className="colors-product-name">{product.name}</span>
      <span className="colors-color-code">{color}</span>
    </div>
  );
};

export default Colors;
