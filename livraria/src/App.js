import { Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import AdministracaoAutores from './paginas/Administracao/Autores/AdministracaoAutores';
import FormularioAutor from './paginas/Administracao/Autores/FormularioAutor';

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin/autores" element={<AdministracaoAutores/>} />
      <Route path="/admin/autores/novo" element={<FormularioAutor/>} />
      <Route path="/admin/autores/:id" element={<FormularioAutor />} />
    </Routes>    
  );
}

export default App;
