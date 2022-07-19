import  NavBar  from './Components/NavBar';
import { ItemListContainer } from './Components/ItemListContainer';
import banner from './BannerEcommerce.svg'
import favoritos from './Favoritos.svg'
import ItemDetailContainer from './Components/ItemDetailContainer';

function App() {
  return (
    <div>
      <header>
        <NavBar /> 
        <div>
          <img className="banner" src={banner} />
        </div>
        <img className="favoritos" src={favoritos} />
        <ItemDetailContainer />
        <ItemListContainer />
      </header>
    </div>
  );
}

export default App;
