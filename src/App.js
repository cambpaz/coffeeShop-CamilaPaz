
import './App.css';
import ItemListContainer  from './components/products/ItemListContainer.js';
import NavBar from './components/navBar/NavBar';
import { OurCollection } from './utils/OurCollection';
import { data } from './data';

function App() {

  return (
    <>
    <NavBar />
    <OurCollection />
    <div className="contenedor-productos">
      <ItemListContainer productosLista={data}/>
    </div>
    </>
  );
}

export default App;
