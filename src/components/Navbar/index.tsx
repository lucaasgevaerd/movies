import './styles.css'
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { globalStates } from '../../App';
import { useContext, useState } from 'react';
import ShoppingCart from './ShoppingCart';

function Navbar() {

  const { wishlistState, shoppingCartState } = useContext(globalStates);

  const [shoppingCart, setShoppingCart] = useState(false);

  const showShoppingCart = () => setShoppingCart(!shoppingCart);

  const [searchedMovies, setSearchedMovies] = useState();

  const api_key = "b8aadf35bce2bcae16af0d0cce150720";

  const [text, setText] = useState();

  const handleChange = async (event: any) => {
    setText(event.target.value)
    getSearchMovies();
  }

  const getSearchMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${text}`);
    const data = await response.json()
  }

  return (
    <>
      <header>
        <nav className='navbar-container'>
          <h1 className="navbar-brand"><Link to={'/'}>Movies</Link></h1>
          <input id='text' name='text' className='navbar-search' type="text" placeholder='Pesquisar' onChange={handleChange} value={text} />
          <div className="navbar-menu">
            <div className='navbar-menu-wishlist'>
              {wishlistState.length > 0 && (
                <div className='item-quantity-indicator'>{wishlistState.length}</div>
              )}
              <Link to={'/wishlist'} >
                <FaHeart />
              </Link>
            </div>
            <div className='navbar-menu-shopping-cart' >
              {shoppingCartState.length > 0 && (
                <div className='item-quantity-indicator'>{shoppingCartState.length}</div>
              )}
              <FaShoppingCart onClick={showShoppingCart} />
              <ShoppingCart clsName={shoppingCart ? 'shopping-cart active' : 'shopping-cart'} />
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar