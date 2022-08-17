import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './style.css';
import api from './services/api';

function App() {

  const [input, setInput] = useState('');
  const [cep, setCEP] = useState({});

  async function handleSearch(){
    if(input === ''){
      alert("Insira algum CEP...");
      return;
    } 
    try{
      const respose = await api.get(`${input}/json`);
      setCEP(respose.data);
      setInput("");
    } catch{
      alert("Erro ao buscar!");
      setInput("");
    }
  }
  
  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>
    
      <div className="containerInput">
        <input 
          type="text"
          placeholder="Digite seu CEP..."
          value={input}
          onChange={(e)=> setInput(e.target.value)}
        />
        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <main className="main">
          <h2>
            CEP: {cep.cep}
          </h2>
          <span>
            Rua: {cep.logradouro}
          </span>
          <span>
            Bairo: {cep.bairro}
          </span>
          <span>
            DDD: {cep.ddd}
          </span>
          <span>
            {cep.localidade} - {cep.uf}
          </span>
        </main>
      )}
    </div>
  );
}

export default App;
