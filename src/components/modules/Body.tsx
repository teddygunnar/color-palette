import React, { FC, memo, useCallback, useState } from "react";
import colors from "../../config/color";
import { Colors, Preview, Modal, SnS } from "..";
import { Color } from "../core/_models";

const Body: FC = () => {
  const [color, setColor] = useState<string>("#fff");
  const [open, setOpen] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [colorInfo, setColorInfo] = useState<Color>({
    color: "",
    product: {
      link: "",
      name: "",
    },
    num: 0,
  });

  const handleOpenModal = (num: number) => {
    const _color = colors[num];
    setOpenModal(true);
    setColorInfo({ ..._color, num });
  };

  const handlePrevColor = useCallback((num: number) => {
    const len = colors.length - 1;
    const _num = num - 1 < 0 ? len : num - 1;
    setColorInfo({ ...colors[_num], num: _num });
  }, []);

  const handleNextColor = useCallback((num: number) => {
    const len = colors.length - 1;
    const _num = num + 1 > len ? 0 : num + 1;
    setColorInfo({ ...colors[_num], num: _num });
  }, []);

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
          handleOpenModal={handleOpenModal}
          key={i}
        />
      ))}
      <Preview color={color} open={open} />
      <Modal
        colorInfo={colorInfo}
        openModal={openModal}
        setOpenModal={setOpenModal}
        handlePrevColor={handlePrevColor}
        handleNextColor={handleNextColor}
      />
    </div>
  );
};

export default Body;
