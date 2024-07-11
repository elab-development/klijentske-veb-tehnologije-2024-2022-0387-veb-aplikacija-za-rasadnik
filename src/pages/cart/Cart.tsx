import React, { useContext } from 'react';
import { PRODUCTS } from '../../Products';
import { ShopContext } from '../../context/shop-context';
import CartItem from './cart-item';

const Cart: React.FC = () => {
    const shopContext = useContext(ShopContext);

  if (!shopContext) {
    return null; // or handle the case where shopContext is undefined
  }
    const { cartItems } = ShopContext;
  return (
    <div className='cart'>
        <div>
            <h1>Your Cart items</h1>
        </div>
        <div className='cartitems'>
            {PRODUCTS.map((Product)=>{
                if(cartItems[Product.id]!==0){
                    return <CartItem key={Product.id} data={Product} />;
                }
                return null;
            })}
        </div>
      

    </div>
  )
}

export default Cart
