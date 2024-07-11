import React from 'react';

interface ProductProps {
    data: {
        id: number;
        productName: string;
        price: number;
        productImage: string;
    };
}

const Product: React.FC<ProductProps> = ({ data }) => {
    const { id, productName, price, productImage } = data;

    return (
        <div className='product'>
            <img src={productImage} alt={productName} />
            <div className='description'>
                <p>
                    <b>{productName}</b>
                </p>
                <p>${price}</p>
            </div>
        </div>
    );
}

export default Product;

