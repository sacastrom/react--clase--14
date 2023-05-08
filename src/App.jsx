import './App.css';
import Formulario from './componentes/Formulario/Formulario';
import Productos from './componentes/Productos/Productos';

function App() {
  return (
    <>
      <h1 className='titulos'>Supermercado Mario Bros</h1>
      <Formulario/>
      <h2 className='titulos'>Mis Productos</h2>
      <Productos/>
    </>
  );
}

export default App;
