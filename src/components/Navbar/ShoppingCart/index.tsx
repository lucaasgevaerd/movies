import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { globalStates } from '../../../App';
import ShoppingCartItem from './ShoppingCartItem';
import './styles.css';

type Props = {
  clsName: string;
  rentIsActived: Function;
}

function ShoppingCart({ clsName, rentIsActived }: Props) {

  const { shoppingCartState, setShoppingCartState } = useContext(globalStates);

  const handleTotalValue = () => {
    const sum = shoppingCartState.reduce((accumulator: any, object: any) => {
      return accumulator + object.price;
    }, 0);
    return sum.toFixed(2)
  }

  const handleShoppingCart = () => {
    rentIsActived()
  }

  const handleShoppingCartCleaning = () => {
    const shoppingCartStateUpdated: [] = []
    setShoppingCartState(shoppingCartStateUpdated)
    localStorage.setItem('shoppingCartState', JSON.stringify(shoppingCartStateUpdated));
    rentIsActived()
  }

  return (
    <div className={clsName}>
      {shoppingCartState.length === 0 ? (
        <p className='empty-shopping-cart'>Empty shopping cart</p>
      ) : (
        <>
          <div className='shopping-cart-items-and-total-movies-container'>
            <p className='shopping-remove-all-movies' onClick={handleShoppingCartCleaning}>Remove all movies</p>
            <div className='shopping-cart-items-container'>
              {shoppingCartState.map((movie: any) => (
                <ShoppingCartItem image={movie.image} title={movie.title} price={movie.price} id={movie.id} key={movie.id} />
              ))}
            </div>
            <p className='shopping-cart-items-total-movies'>Total movies: <span className='shopping-cart-items-quantity'>{shoppingCartState.length}</span></p>
          </div>
          <div className='total-value-movies-container'>
            <p className='shopping-cart-items-total-value'>Total value: <span className='shopping-cart-items-price'>${handleTotalValue()}</span></p>
            <Link to={'/checkout'} className='shopping-cart-rent-link' onClick={handleShoppingCart}>Rent</Link>
          </div>
        </>
      )}
    </div>
  )
}

export default ShoppingCart