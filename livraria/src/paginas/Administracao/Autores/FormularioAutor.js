import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../../../http";

const FormularioAutor = () => {
  const parametros = useParams();

  useEffect(() => {
    if (parametros.id) {
      http.get(`autores/${parametros.id}`)
        .then((resposta) => setNomeAutor(resposta.data.nome));
    }
  }, [parametros]);

  const [nomeAutor, setNomeAutor] = useState("");

  const aoSubmeterForm = (evento) => {
    evento.preventDefault();

    if (parametros.id) {
      http.put(`autores/${parametros.id}`, {
          nome: nomeAutor,
        })
        .then(() => {
          alert("Autor atualizado com sucesso");
        });
    } else {
      http.post("autores", {
          nome: nomeAutor,
        })
        .then(() => {
          alert("Autor cadastrado com sucesso");
        });
    }
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography component="h1" variant="h6">
        Formulário de Autores
      </Typography>
      <Box component="form" onSubmit={aoSubmeterForm}>
        <TextField
          value={nomeAutor}
          onChange={(evento) => setNomeAutor(evento.target.value)}
          label="Nome do Autor"
          variant="standard"
          fullWidth
          required>
        </TextField>
        <Button sx={{ marginTop: 1 }} type="submit" fullWidth variant="outlined">
            Cadastrar
        </Button>
      </Box>
    </Box>
  );
};

export default FormularioAutor;
