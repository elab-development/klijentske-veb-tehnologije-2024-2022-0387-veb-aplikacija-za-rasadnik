import React from 'react';
import Button from './Button';

const ProductCard = ({ name, price }) => (
  <div>
    <h2>{name}</h2>
    <p>{price}</p>
    <Button label="Add to Cart" />
  </div>
);

export default ProductCard;