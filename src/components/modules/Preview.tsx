import { FC, memo, useCallback, useEffect, useState } from "react";
import tinyColor from "tinycolor2";
import { getBrightness } from "../../helper";

interface IPreview {
  color: string;
  open: boolean;
}

const Preview: FC<IPreview> = memo(({ color, open }) => {
  const [brightness, setBrightness] = useState<string>("light");
  const calcBrightness = (_color: string) => {
    const brightness = getBrightness(_color);

    setBrightness(brightness);
  };

  useEffect(() => {
    calcBrightness(color);
  }, [color]);

  return (
    <div
      className="preview-container"
      data-open={open}
      style={{ backgroundColor: color }}
    >
      <span className="preview-color-code" data-brightness={brightness}>
        {color}
      </span>
    </div>
  );
});

export default Preview;
