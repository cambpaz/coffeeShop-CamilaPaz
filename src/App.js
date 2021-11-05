
import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import NavBar from './components/NavBar';
import danche from './assets/image-danche.png'
import piccollo from './assets/image-piccollo.png'
import planalto from './assets/image-planalto.png'
import Espresso from './assets/image-gran-espresso.png'
import { OurCollection } from './components/OurCollection';

function App() {
  return (
    <>
    <NavBar />
    <OurCollection />
    <div className="contenedor-productos">
      <ItemListContainer image={Espresso} producto="Gran Espresso" stock={12}/>
      <ItemListContainer image={danche} producto="Danche" stock={0}/>
      <ItemListContainer image={planalto} producto="Planalto" stock={4}/>
      <ItemListContainer image={piccollo} producto="Piccollo" stock={11}/>
    </div>
    </>
  );
}

export default App;
