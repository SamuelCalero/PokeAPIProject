
import './App.css';
import BuscarPokemon from './Components/BuscarPokemon';

import Listar from './Components/Listar';
import ListarPokemon from './Components/ListarPokemon';


function App() {
  return (
    <div className="container">
      <BuscarPokemon />
      {<Listar/>}
    </div>
  );
}

export default App;
