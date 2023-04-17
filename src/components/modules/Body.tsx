import React, { FC, useState } from "react";
import colors from "../../config/color";
import { Colors, Preview } from "..";

const Body: FC = () => {
  const [color, setColor] = useState<string>("#fff");
  const [open, setOpen] = useState<boolean>(false);

  const onMouseOver = (num: number) => {
    const _color = colors[num].color;
    setColor(_color);
    setOpen(true);
  };

  const onMouseOut = () => {
    setOpen(false);
  };

  return (
    <div className="body-color-wrapper">
      {colors.map((val, i) => (
        <Colors
          color={val.color}
          product={val.product}
          num={i}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          key={i}
        />
      ))}
      <Preview color={color} open={open} />
    </div>
  );
};

export default Body;
