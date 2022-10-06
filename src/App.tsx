import { createContext, useState } from 'react';
import './App.css';
import AppRouter from './AppRouter';
import Navbar from './components/Navbar';

export const globalStates = createContext({
  shoppingCartState: [] as any,
  setShoppingCartState: (shoppingCartState: any[]) => { },
  wishlistState: [] as any,
  setWishlistState: (favoriteState: any[]) => { },
});

function App() {

  const [shoppingCartState, setShoppingCartState] = useState<any[]>(() => {
    if (localStorage.getItem('shoppingCartState')) {
      return JSON.parse(localStorage.getItem('shoppingCartState')!);
    } else {
      return [];
    }
  })


  const [wishlistState, setWishlistState] = useState<any[]>(() => {
    if (localStorage.getItem('wishlistState')) {
      return JSON.parse(localStorage.getItem('wishlistState')!);
    } else {
      return [];
    }
  })

  return (
    <>
      <globalStates.Provider value={{ shoppingCartState, setShoppingCartState, wishlistState, setWishlistState }} >
        <Navbar />
        <AppRouter />
      </globalStates.Provider>
    </>
  );
}

export default App;
