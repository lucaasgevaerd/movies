import './styles.css'
import { genreList } from '../../types/movies';
import { FaHeart, FaCartPlus } from 'react-icons/fa';
import { useState } from 'react';

type Props = {
  image: string;
  title: string;
  description: string;
  release: string;
  genres: [];
  id: number
}

function MovieCard({ image, title, description, release, genres, id }: Props) {

  const [overview, setOverview] = useState(false);
  const showOverview = () => setOverview(!overview);
  const address_image = "https://image.tmdb.org/t/p/w500";


  const GenreConvert = (value: any) => {
    return (<p className='movie-card-genres' key={value}>{genreList.find(y => value === y.id && y)?.name}</p>)
  }

  return (
    <>
      <div className="movie-card-container" key={id} onClick={showOverview}>
        <FaHeart className='movie-card-favorite-button' />
        <FaCartPlus className='movie-card-add-shopping-cart-button' />
        <img src={`${address_image}${image}`} alt={title} referrerPolicy={'no-referrer'} className="movie-card-image" />
        <div className={overview ? 'overview active' : 'overview'}>
          <div className='movie-card-content'>
            <div className='movie-card-genres-and-title'>
              <p>Genres:</p>
              <div className='movie-card-genres-container'>
                {genres.map(x => GenreConvert(x))}
              </div>
            </div>
            <p className='movie-card-overview'>Overview</p>
            <p className='movie-card-description'>{description}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieCard