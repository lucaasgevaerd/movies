import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { globalStates } from '../../App';
import MovieCard from '../../components/MovieCard';
import './styles.css';

function Wishlist() {

  const { wishlistState, setWishlistState } = useContext(globalStates)
  const [counter, setCounter] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    if (wishlistState.length === 0 && counter > 0) {
      const id = setInterval(() => {
        setCounter((count) => count - 1);
      }, 1000);
      return () => {
        clearInterval(id);
      };
    }
    if (counter === 0) {
      navigate('/')
    }
  }, [counter, navigate, wishlistState.length]);


  return (
    <main className='wishlist-main-container'>
      <section className='wishlist-movies-container'>
        {wishlistState.length === 0 && (
          <p className='empty-wishlist-message'>Your wishlist is empty, you will be redirected to the homepage in {counter} seconds.</p>
        )}
        {wishlistState.map((movie: any) => (
          <MovieCard image={movie.image} title={movie.title} description={movie.description} release={movie.release} genres={movie.genres} price={movie.price} id={movie.id} key={movie.id} />
        ))}
      </section>
    </main>
  )
}

export default Wishlist