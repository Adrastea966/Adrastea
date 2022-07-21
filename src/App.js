import  NavBar  from './Components/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { ItemListContainer } from './Components/ItemListContainer';
import Footer from './Components/Footer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Home from "./Components/Home";

function App() {
  return (
    <div>
      <header>
        <BrowserRouter>
          <NavBar /> 
          <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="/category/:id" element={<ItemListContainer /> } />
            <Route path="/item/:detalleId" element={<ItemDetailContainer />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
