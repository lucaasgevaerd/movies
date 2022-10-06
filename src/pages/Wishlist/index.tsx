import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { globalStates } from '../../App';
import MovieCard from '../../components/MovieCard';
import './styles.css';

function Wishlist() {

  const { wishlistState, setWishlistState } = useContext(globalStates)
  const [counter, setCounter] = useState(3);
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
    <>
      <main className='wishlist-main-container'>
        {
          wishlistState.length === 0 ? (
            <section className='empty-wishlist-container'>
              <p className='empty-wishlist-message'>Your wishlist is empty...<br /><span className='seconds-redirect-text'>You will be redirected to the homepage in {counter} seconds.</span></p>
            </section>
          ) : (
            <section className='wishlist-movies-container'>
              {wishlistState.map((movie: any) => (
                <MovieCard image={movie.image} title={movie.title} description={movie.description} release={movie.release} genres={movie.genres} price={movie.price} id={movie.id} key={movie.id} />
              ))}
            </section>
          )
        }
      </main>
    </>
  )
}

export default Wishlist