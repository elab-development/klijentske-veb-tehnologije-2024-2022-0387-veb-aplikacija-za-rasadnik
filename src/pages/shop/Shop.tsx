import React from 'react';
import {PRODUCTS} from '../../Products';
import Product from './Product';

const Shop: React.FC = () => {
  return (
    <div className='shop'> 
        <div className='shopTitle'>
            <h1>PlantBloom Shop</h1>
        </div>
        <div className='products'>
            {PRODUCTS.map((Product)=>(
            <Product key={Product.id} data={Product} />
        ))}
        </div>
    </div>
  );
}

export default Shop;

