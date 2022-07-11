import './App.css';
import  NavBar  from './Components/NavBar';
import { ItemListContainer } from './Components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer greating="Hola mundo!!"/>
      </header>
    </div>
  );
}

export default App;
