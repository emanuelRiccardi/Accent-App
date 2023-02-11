import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemCount from './components/ItemCount/ItemCount';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function app() {
  return (
    <BrowserRouter>
    <NavBar
        titleIcon="Accent"
        furniture="Furniture"
        bundles="Bundles"
        journal="Journal"
        aboutUs="About Us"
        iconCart="./assets/ShoppingCart.svg"
    />
    <Routes>
      <Route path='/' element={<ItemListContainer/>} />
      <Route path='/category/:categoryId' element={<ItemListContainer/>} />
      {/* <Route path='/category//tables' element={<ItemListContainer/>} /> */}
      <Route path='/detail/:productId' element={<ItemDetailContainer/>} />
      {/* <Route path='/error' element={<404NotFound/>} /> */}

      {/* <Route path='*' element={ <Navigate to='/' /> }/> */}
    </Routes>
    
    <ItemCount />
    </BrowserRouter>
  );
}
export default app




