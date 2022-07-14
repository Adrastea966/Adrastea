import  NavBar  from './Components/NavBar';
import { ItemListContainer } from './Components/ItemListContainer';
import banner from './BannerEcommerce.svg'
import favoritos from './Favoritos.svg'

function App() {
  return (
    <div>
      <header>
        <NavBar /> 
        <div>
          <img className="banner" src={banner} />
        </div>
        <img className="favoritos" src={favoritos} />
        <ItemListContainer />
      </header>
    </div>
  );
}

export default App;
