const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes; 

/**
 *   Tipos de parâmetros:
 *   
 *   Query params: parâmetros nomeados enviados na rota após '?' para filtros, paginação
 *                   (ex: /users?name=Diego&page=2)    request.query
 *   Route params: identificar recursos
 *                   (ex: /users/1 --> "app.get('/users/:id'...")  request.params
 *   Request body: corpo da requisição para criar ou alterar recursos
 *            
 */