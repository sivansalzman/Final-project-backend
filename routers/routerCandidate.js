const { Router } = require('express'); 
const{ candidateDBController} = require('../controllers/candidate.ctrl');

const candidateRouter = new Router();  

candidateRouter.get('/', candidateDBController.getCandidates);
candidateRouter.get('/:id', candidateDBController.getCandidate);
candidateRouter.post('/', candidateDBController.createCandidate);
candidateRouter.delete('/:id', candidateDBController.deleteCandidate);

module.exports = {candidateRouter};
