export interface Headers {}

export interface ColorProps {
  color: string;
  product: {
    name: string;
    link: string;
  };
  num: number;
  onMouseOver: (i: number) => void;
  onMouseOut: () => void;
}
