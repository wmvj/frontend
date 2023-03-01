import Banner from './componentes/Banner';
import Form from './componentes/Form';
import {useState} from 'react';
import Category from './componentes/Category';


function App() {

const [livros, setLivros] = useState([])
const NovoLivroCadastrado = (livro) => {
  console.log(livro)
  setLivros(...livros, livro)
}

  return (
    <div className="App">
      <Banner/>
      <Form LivroCadastrado = {livro => NovoLivroCadastrado(livro)}/>
      <Category nome='Programação' />
      <Category nome='Frontend' />
      <Category nome='Backend' />
    </div>
  );
}

export default App;
