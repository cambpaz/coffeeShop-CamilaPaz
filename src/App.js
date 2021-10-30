
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
      <ItemListContainer image={Espresso} producto="Gran Espresso"/>
      <ItemListContainer image={danche} producto="Danche"/>
      <ItemListContainer image={planalto} producto="Planalto"/>
      <ItemListContainer image={piccollo} producto="Piccollo"/>
    </div>
    </>
  );
}

export default App;
