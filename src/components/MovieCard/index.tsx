import './styles.css'
import { genreList } from '../../types/movies';
import { FaHeart, FaShoppingCart, FaRegWindowClose, FaWindowClose } from 'react-icons/fa';
import { useContext, useEffect, useState } from 'react';
import { globalStates } from '../../App';

type Props = {
  image: string;
  title: string;
  description: string;
  release: string;
  genres: [];
  price: number;
  id: number
}

function MovieCard({ image, title, description, release, genres, price, id }: Props) {

  const { wishlistState, setWishlistState, shoppingCartState, setShoppingCartState } = useContext(globalStates);

  const [overview, setOverview] = useState(false);

  const showOverview = () => setOverview(!overview);

  const address_image = "https://image.tmdb.org/t/p/w500";

  const GenreConvert = (value: any) => {
    return (<p className='movie-card-genres' key={value}>{genreList.find(y => value === y.id && y)?.name}</p>)
  }









  const [shoppingCartColor, setShoppingCartColor] = useState<string>();
  const [wishlistColor, setWishlistColor] = useState<string>();

  const handleShoppingCart = () => {
    if (shoppingCartState.find((i: any) => i.id === id)) {  // REMOÇÃO DE FILME DO CARRINHO DE COMPRAS
      const shoppigCartRemove = shoppingCartState.filter((i: any) => i.id !== id)
      setShoppingCartState(shoppigCartRemove)
    } else {  //ADICIONAR FILME NO CARRINHO DE COMPRAS
      setShoppingCartState([{ image: address_image + image, title, description, release, genres, price, id, shoppingCart: true }, ...shoppingCartState])
    }
  }

  const handleWishlist = () => {
    if (wishlistState.find((i: any) => i.id === id)) {  // REMOÇÃO DE FILME DA LISTA DE DESEJOS
      const wishlistRemove = wishlistState.filter((i: any) => i.id !== id)
      setWishlistState(wishlistRemove)
    } else {  //ADICIONAR FILME NA LISTA DE DESEJOS
      setWishlistState([{ image: address_image + image, title, description, release, genres, price, id, wishlist: true }, ...wishlistState])
    }
  }

  useEffect(() => {
    if (shoppingCartState.find((movie: any) => movie.id === id)) {
      shoppingCartState.find((movie: any) => movie.shoppingCart === true && (
        setShoppingCartColor('#ff0')
      ))
    } else {
      setShoppingCartColor('#aaa')
    }
  }, [id, shoppingCartState])

  useEffect(() => {
    if (wishlistState.find((movie: any) => movie.id === id)) {
      wishlistState.find((movie: any) => movie.wishlist === true && (
        setWishlistColor('#f00')
      ))
    } else {
      setWishlistColor('#aaa')
    }
  }, [id, wishlistState])


  return (
    <>
      <div className="movie-card-container" key={id}>
        <div className='movie-card-wishlist-button'>
          <FaHeart onClick={handleWishlist} color={wishlistColor} />
          <p className='movie-card-wishlist-button-description'>Add or remove from wishlist?</p>
        </div>
        <div className='movie-card-shopping-cart-button'>
          <FaShoppingCart onClick={handleShoppingCart} color={shoppingCartColor} />
          <p className='movie-card-shopping-cart-description'>Add or remove from shopping cart?</p>
        </div>
        <img src={`${address_image}${image}`} alt={title} referrerPolicy={'no-referrer'} className="movie-card-image" onClick={showOverview} />
        <p className='movie-card-value'>Rent for: <span className='movie-card-value-price'>${price.toFixed(2)}</span></p>
        <div className={overview ? 'overview active' : 'overview'}>
          <FaRegWindowClose className='movie-card-window-close-button' onClick={showOverview} />
          <div className='movie-card-content'>
            <div className='movie-card-genres-and-title'>
              <p>Genres:</p>
              <div className='movie-card-genres-container'>
                {genres?.map(x => GenreConvert(x))}
              </div>
            </div>
            <p className='movie-card-overview'>Overview</p>
            <p className='movie-card-description'>{description}</p>
          </div>
        </div>
        <p className='tap-to-learn-more'>Tap to learn more</p>
      </div>
    </>
  )
}

export default MovieCard