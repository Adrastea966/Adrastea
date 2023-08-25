import  NavBar  from './Components/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { ItemListContainer } from './Components/ItemListContainer';
import Footer from './Components/Footer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import CartContextProvider from './Components/CartContext';



function App() {
  return (
    <div>
      <header>
        <BrowserRouter>
          <CartContextProvider>
          <NavBar /> 
          <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="/category/:id" element={<ItemListContainer /> } />
            <Route path="/item/:detalleId" element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
          <Footer />
          </CartContextProvider>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;