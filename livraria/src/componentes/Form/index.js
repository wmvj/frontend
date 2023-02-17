import "./index.css";
import InputText from '../InputText';
import Dropdown from "../Dropdown";
import Button from "../Button";

const Form = () => {

  const categorias = [
    'Programação',
    'Front-End',
    'Back-End',
    'Data Science',
    'Mobile',
    'Gestão'
  ]

  const Salvar = (evento) => {
     evento.preventDefault()
     console.log('Form foi submetido')
  }

  return (
    <section className="formulario">
      <form onSubmit={Salvar}>
        <h2>Preencha os dados para criar o card do livro</h2>
        <InputText obrigatorio={true} label="Titulo" placeholder="Digite o título do livro" />
        <InputText obrigatorio={true} label="Autor" placeholder="Digite o nome do autor" />
        <InputText label="Capa" placeholder="Digite o endereço da capa" />
        <Dropdown obrigatorio={true} label='Categoria' itens={categorias}/>
        <Button>
           Criar Card
        </Button>
      </form>
    </section>
  );
};

export default Form;
