import { useContext } from 'react';
import { globalStates } from '../../App';
import MovieCard from '../../components/MovieCard';
import './styles.css';

function Wishlist() {

  const { wishlistState, setWishlistState } = useContext(globalStates)

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