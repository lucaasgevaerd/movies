import './styles.css'
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <header>
        <nav className='navbar-container'>
          <h1 className="navbar-brand"><Link to={'/'}>Movies</Link></h1>
          <input className='navbar-search' type="text" placeholder='Pesquisar' />
          <div className="navbar-menu">
            <FaHeart className='navbar-menu-heart' />
            <FaShoppingCart className='navbar-menu-shopping-cart' />
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar