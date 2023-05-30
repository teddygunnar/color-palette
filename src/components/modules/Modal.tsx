import React, {
  CSSProperties,
  FC,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Color } from "../core/_models";
import tinyColor from "tinycolor2";
import { getBrightness } from "../../helper";

interface ModalProps {
  openModal: boolean;
  setOpenModal: (prev: boolean) => void;
  colorInfo: Color;
  handlePrevColor: (num: number) => void;
  handleNextColor: (num: number) => void;
}

const Modal: FC<ModalProps> = memo(
  ({
    openModal,
    colorInfo,
    setOpenModal,
    handlePrevColor,
    handleNextColor,
  }) => {
    const { color, product, num } = colorInfo;
    const [brightness, setBrightness] = useState<"light" | "dark">("light");
    const [copied, setCopied] = useState<boolean>(false);
    const timerRef = useRef<number | null>(null);

    const calcBrightness = useCallback((_color: string) => {
      const brightness = getBrightness(_color);
      setBrightness(brightness);
    }, []);

    const handleCopyColor = useCallback(() => {
      navigator.clipboard.writeText(color);
      setCopied(true);

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        setCopied(false);
      }, 800);
    }, [color]);

    useEffect(() => {
      calcBrightness(color);
    }, [color]);

    return (
      <div className="bg-modal" data-show={openModal}>
        <div className="container-modal" data-show={openModal}>
          <div className="inner-modal" data-show={openModal}>
            <div className="lineback-modal">
              <div />
              <div />
            </div>
            <div className="close-modal" onClick={() => setOpenModal(false)} />
            <div className="panel-modal">
              <div className="header-modal">
                <div className="header-title-modal">{product.name}</div>
              </div>
              <div className="body-modal">
                <div className="colorContent-modal" data-show={openModal}>
                  <div className="productName-modal" data-show={openModal}>
                    <span>Product: </span>
                    <span>{product.name}</span>
                  </div>
                  <div className="colorCode-modal" data-show={openModal}>
                    <span>ColorCode: </span>
                    <span>{color}</span>
                  </div>
                  <div
                    className="colorLine-modal"
                    data-show={openModal}
                    data-color={color}
                    style={{ "--color": color } as CSSProperties}
                  >
                    <span data-brightness={brightness}>{color}</span>
                  </div>
                </div>
                <div
                  className="prev-btn-modal"
                  data-show={openModal}
                  onClick={() => handlePrevColor(num!)}
                />
                <div
                  className="next-btn-modal"
                  data-show={openModal}
                  onClick={() => handleNextColor(num!)}
                />
              </div>
              <div className="footer-modal">
                <div
                  className="copy-btn-modal"
                  onClick={handleCopyColor}
                  data-copy={copied}
                  style={{ "--color": color } as CSSProperties}
                />
              </div>
            </div>
            <div className="linefront-modal">
              <div />
              <div />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default Modal;
