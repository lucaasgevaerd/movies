import { useContext } from 'react';
import { globalStates } from '../../../App';
import ShoppingCartItem from './ShoppingCartItem';
import './styles.css';

type Props = {
  clsName: string;
}

function ShoppingCart({ clsName }: Props) {

  const { shoppingCartState } = useContext(globalStates);

  return (
    <div className={clsName}>
      {shoppingCartState.map((movie: any) => (
        <ShoppingCartItem image={movie.image} title={movie.title} price={movie.price} id={movie.id} key={movie.id} />
      ))}
    </div>
  )
}

export default ShoppingCart