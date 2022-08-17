import { FiSearch } from 'react-icons/fi';
import './style.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>
    
      <div className="containerInput">
        <input 
          type="text"
          placeholder="Digite seu CEP..."
        />
        <button className="buttonSearch">
        <FiSearch size={25} color="#FFF"/>
      </button>
      </div>
      <main className="main">
        <h2>
          CEP: 18870-546
        </h2>
        <span>
          Bairo: Vila São Vicente
        </span>
        <span>
          Rua: Dr Yves Ribeiro
        </span>
        <span>
          Complemento: Apt 12
        </span>
        <span>
          Bandeirantes - PR
        </span>
      </main>
    </div>
  );
}

export default App;
