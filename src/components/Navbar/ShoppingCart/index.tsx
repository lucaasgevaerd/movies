import { useContext } from 'react';
import { globalStates } from '../../../App';
import ShoppingCartItem from './ShoppingCartItem';
import './styles.css';

type Props = {
  clsName: string;
}

function ShoppingCart({ clsName }: Props) {

  const { shoppingCartState } = useContext(globalStates);

  const handleTotalValue = () => {
    const sum = shoppingCartState.reduce((accumulator: any, object: any) => {
      return accumulator + object.price;
    }, 0);
    return sum.toFixed(2)
  }

  return (
    <div className={clsName}>
      <div className='shopping-cart-items-container'>
        {shoppingCartState.map((movie: any) => (
          <ShoppingCartItem image={movie.image} title={movie.title} price={movie.price} id={movie.id} key={movie.id} />
        ))}
      </div>
      <p className='shopping-cart-items-total-value'>Total value: <span className='shopping-cart-items-price'>${handleTotalValue()}</span></p>
    </div>
  )
}

export default ShoppingCart