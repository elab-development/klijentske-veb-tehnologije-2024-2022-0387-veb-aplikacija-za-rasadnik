import React , {useContext} from 'react'
import { ShopContext } from '../../context/shop-context';

interface CartItemProps {
    data: {
      id: number;
      productName: string;
      price: number;
      productImage: string;
    };
  }
  
  const CartItem: React.FC<CartItemProps> = (props) => {
    const { id, productName, price, productImage } = props.data;
  
    const shopContext = useContext(ShopContext);
  
    if (!shopContext) {
      return null; // or handle the case where shopContext is undefined
    }
  
    const { cartItems, addToCart, removeFromCart } = shopContext;
  return (
    <div className='cartitem'>
        <img src={productImage}/>
        <div className='description'>
            <p> {""}
                <b>{productName}</b>
            </p>
            <p>${price}</p>
            <div className='countHandler'>
                <button onClick={()=>removeFromCart(id)}>-</button>
                <input value={cartItems[id]}/>
                <button onClick={()=>addToCart(id)}>+</button>
            </div>
        </div>
      

    </div>
  )
}

export default CartItem
