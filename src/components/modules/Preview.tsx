import { FC, memo } from "react";

interface IPreview {
  color: string;
  open: boolean;
}

const Preview: FC<IPreview> = memo(({ color, open }) => {
  return (
    <div
      className="preview-container"
      data-open={open}
      style={{ backgroundColor: color }}
    >
      <span className="preview-color-code">{color}</span>
    </div>
  );
});

export default Preview;
