import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

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

  const shopContext = useContext(ShopContext);

  if (!shopContext) {
    return null; // or handle the case where shopContext is undefined
  }

  const { addToCart, cartItems } = shopContext;
  const cartItemAmount = cartItems[id] || 0;

  return (
    <div className='product'>
      <img src={productImage} alt={productName} />
      <div className='description'>
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className='addToCartBttn' onClick={() => addToCart(id)}>
        Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
      </button>
    </div>
  );
}

export default Product;