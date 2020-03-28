const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors()); // Segurança
app.use(express.json());
app.use(routes);

 /**
  * ENTIDADES:
  *     ONG
  *     Casos
  * FUNCIONALIDADES:
  *     Login de ONG
  *     Logout de ONG
  *     Cadastro de ONG
  *     Cadastrar novos casos
  *     Deletar casos
  *     Listar casos da ONG
  *     Listar TODOS os casos
  *     Entrar em contato com a ONG
  */

app.listen(3333);