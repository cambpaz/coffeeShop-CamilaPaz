
import './App.css';
import ItemListContainer  from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { OurCollection } from './components/OurCollection';
import {data} from './data';

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
