import './App.css'
import NavBar from './components/NavBar/NavBar' 
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function app(){
  return (
    <>
    <div className='desktop'>
    <NavBar
        titleIcon="Accent"
        furniture="Furniture"
        bundles="Bundles"
        journal="Journal"
        aboutUs="About Us"
        iconCart="./assets/ShoppingCart.svg"
    />
    <ItemListContainer/>
    </div>
    </>
  );
}
export default app




