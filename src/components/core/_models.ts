export interface Color {
  color: string;
  product: {
    name: string;
    link: string;
  };
  num?: number;
}

export interface ColorProps extends Color {
  num: number;
  onMouseOver: (i: number) => void;
  onMouseOut: () => void;
  handleOpenModal: (i: number) => void;
}
