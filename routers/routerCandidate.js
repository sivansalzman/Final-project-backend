const { Router } = require('express'); 
const{ candidateDBController} = require('../controllers/candidate.ctrl');

const candidateRouter = new Router();  

candidateRouter.get('/', candidateDBController.getCandidates);

module.exports = {candidateRouter};
