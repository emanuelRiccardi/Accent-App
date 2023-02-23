import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemCount from './components/ItemCount/ItemCount';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';
import CartContainer from './components/CartContainer/CartContainer';

function app() {
  return (
    <BrowserRouter>
    <CartContextProvider>
      <NavBar
          titleIcon="Accent"
          furniture="sofas"
          bundles="tables"
          journal="Journal"
          aboutUs="About Us"
          iconCart="./assets/ShoppingCart.svg"
      />
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:categoryId' element={<ItemListContainer/>} />
        {/* <Route path='/category//tables' element={<ItemListContainer/>} /> */}
        <Route path='/detail/:productId' element={<ItemDetailContainer/>} />
        <Route path='/cart' element = { <CartContainer/> } />
        {/* <Route path='/error' element={<404NotFound/>} /> */}

        {/* <Route path='*' element={ <Navigate to='/' /> }/> */}
      </Routes>
      
      {/* <ItemCount inital={1} stock={10} onAdd={()=>{}} /> */}
    </CartContextProvider>
    </BrowserRouter>
  );
}
export default app




