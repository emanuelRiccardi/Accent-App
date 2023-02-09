import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemCount from './components/ItemCount/ItemCount';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';


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
    <Router>
      <Route path='/' element={<ItemListContainer />} />
    </Router>
    <ItemCount />
    </BrowserRouter>
  );
}
export default app




