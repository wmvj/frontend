import {
  Button,
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import http from "../../../http";


const AdministracaoAutores = () => {

  const [autores, setAutores] = useState([]);

  useEffect(() => {
      http.get('autores')
        .then(resposta => setAutores(resposta.data))
    }, [])

    const excluir = (autorAhSerExcluido) => {
        http.delete(`autores/${autorAhSerExcluido._id}`)
            .then(() => {
                const listaAutor = autores.filter(autor => autor._id !== autorAhSerExcluido._id)
                setAutores([ ...listaAutor ])
            })
    }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Editar</TableCell>
            <TableCell>Excluir</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {autores.map(autor => 
            <TableRow key={autor._id}>
              <TableCell>{autor.nome}</TableCell>
              <TableCell> [ <Link to={`/admin/autores/${autor._id}`}>editar</Link> ]</TableCell>
              <TableCell>
                 <Button variant="outlined" color="error" onClick={() => excluir(autor)}>
                    Excluir
                 </Button>
               </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdministracaoAutores;
