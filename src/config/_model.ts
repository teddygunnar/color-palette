interface Product {
    name: string;
    link: string;
}

interface ColorObject {
    color: string;
    product: Product;
}

export type ColorsType = ColorObject[]