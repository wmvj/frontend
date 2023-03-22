import Book from "../Book";
import "./index.css";

const Category = (props) => {
  return (
    props.livros.length > 0 && (
      <section
        className="categoria"
        style={{ backgroundColor: props.corSecundaria }}
      >
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        <div className="livros">
          {props.livros.map((livro) => (
            <Book
              cordeFundo = {props.corPrimaria}
              key={livro.autor} 
              autor={livro.autor} 
              titulo={livro.titulo} 
              capa={livro.capa} 
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Category;
