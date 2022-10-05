import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { globalStates } from '../../App';
import MovieCard from '../../components/MovieCard';
import './styles.css';

function Wishlist() {

  const { wishlistState, setWishlistState } = useContext(globalStates)

  const navigate = useNavigate();

  useEffect(() => {
    if (wishlistState.length === 0) {
      navigate('/')
    }
  }, [navigate, wishlistState])


  return (
    <main className='main-container'>
      <section className='movies-container'>
        {wishlistState.map((movie: any) => (
          <MovieCard image={movie.image} title={movie.title} description={movie.description} release={movie.release} genres={movie.genres} price={movie.price} id={movie.id} key={movie.id} />
        ))}
      </section>
    </main>
  )
}

export default Wishlist