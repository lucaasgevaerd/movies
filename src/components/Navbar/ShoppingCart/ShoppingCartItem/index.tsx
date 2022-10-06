import './styles.css';
import { FaTrash } from 'react-icons/fa'
import { globalStates } from '../../../../App';
import { useContext } from 'react';

type Props = {
  image: string;
  title: string;
  price: number;
  id: number;
}

function ShoppingCartItem({ image, title, price, id }: Props) {

  const { shoppingCartState, setShoppingCartState } = useContext(globalStates);

  const handleMovieRemove = () => {
    const shoppingCartStateUpdated = shoppingCartState.filter((i: any) => i.id !== id);
    setShoppingCartState(shoppingCartStateUpdated)
    localStorage.setItem('shoppingCartState', JSON.stringify(shoppingCartStateUpdated));
  }


  return (
    <>
      <div className='shopping-cart-item-container'>
        <img className='shopping-cart-item-image' src={image} alt={title} />
        <p className='shopping-cart-item-title'>{title}</p>
        <p className='shopping-cart-item-price'>${price.toFixed(2)}</p>
        <FaTrash className='shopping-cart-item-trash' onClick={handleMovieRemove} />
      </div>
    </>
  )
}

export default ShoppingCartItem