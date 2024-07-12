import product1 from './images/difembahija.webp';
import product2 from './images/aureovariegatus_2.jpg';
import product3 from './images/buxus-sempervirens-1_7_1_1.jpg';
import product4 from './images/carex-ice-dance_1.jpg';
import product5 from './images/cascade_ruby_2.jpg';
import product6 from './images/Dracena-Marginata-3gr.-1-2.webp';
import product7 from './images/fikus-ginseng-veliki-2.webp';
import product8 from './images/fikus-zeleni-1.jpg.webp';
import product9 from './images/grusoni-1.jpg.webp';
import product10 from './images/Palma-Areka-1-768x768.jpg.webp';
import product11 from './images/seflera.1-768x768.jpg.webp';



interface Product {
    id: number;
    productName: string;
    price: number;
    productImage: string;
}

export const PRODUCTS: Product[] = [
    {
        id: 1,
        productName: "Difembahija",
        price: 1200.00,
        productImage: product1,
    },
    {
        id: 2,
        productName: "Microphyllus Aureovariegatus",
        price: 660.00,
        productImage: product2,
    },
    {
        id: 3,
        productName: "Faulkner",
        price: 5120.00,
        productImage: product3,
    },
    {
        id: 4,
        productName: "Ice Dance",
        price: 440.00,
        productImage: product4,
    },
    {
        id: 5,
        productName: "Cascade Ruby",
        price: 5360.00,
        productImage: product5,
    },
    {
        id: 6,
        productName: "Dracena Marginata",
        price: 3500.00,
        productImage: product6,
    },
    {
        id: 7,
        productName: "Fikus Ginseng",
        price: 45000.00,
        productImage: product7,
    },
    {
        id: 8,
        productName: "Fikus Bendzamin",
        price: 1800.00,
        productImage: product8,
    },
    {
        id: 9,
        productName: "Grusoni",
        price: 10000.00,
        productImage: product9,
    },
    {
        id: 10,
        productName: "Palma Howea",
        price: 5500.00,
        productImage: product10,
    },
    {
        id: 11,
        productName: "Šeflera",
        price: 1500.00,
        productImage: product11,
    }
];
