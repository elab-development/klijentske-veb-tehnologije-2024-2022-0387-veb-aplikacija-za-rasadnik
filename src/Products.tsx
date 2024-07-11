import product1 from './images/gallery-img-01.jpg';

interface Product {
    id: number;
    productName: string;
    price: number;
    productImage: string;
}

export const PRODUCTS: Product[] = [
    {
        id: 1,
        productName: "Krastavac",
        price: 80.00,
        productImage: product1,
    },
];
