import { useContext, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { globalStates } from '../../../App';
import './styles.css';

type Props = {
  image: string;
  title: string;
  price: number;
  id: number;
}

function CheckoutShoppingCartItem({ image, title, price, id }: Props) {

  const { shoppingCartState, setShoppingCartState } = useContext(globalStates);

  const handleMovieRemove = () => {
    const shoppingCartStateUpdated = shoppingCartState.filter((i: any) => i.id !== id);
    setShoppingCartState(shoppingCartStateUpdated)
    localStorage.setItem('shoppingCartState', JSON.stringify(shoppingCartStateUpdated));
  }

  return (
    <div className="checkout-shopping-cart-item-container">
      <img src={image} alt={title} className='checkout-shopping-cart-item-image' />
      <p className="checkout-shopping-cart-item-title">{title}</p>
      <p className="checkout-shopping-cart-item-price">${price.toFixed(2)}</p>
      <FaTrash className='checkout-shopping-cart-item-trash' onClick={handleMovieRemove} />
    </div>
  )
}

export default CheckoutShoppingCartItem