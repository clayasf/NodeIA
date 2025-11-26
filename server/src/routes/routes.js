const express = require('express');
const promptController = require('../controllers/prompt-controller');

const routes = express.Router();
console.log('Definindo as rotas da aplicação...');
routes.post('/api/prompt', promptController.sendText);   

module.exports = routes;