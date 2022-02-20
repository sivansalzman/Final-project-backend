const { Router } = require('express'); 
const{ companyDBController} = require('../controllers/company.ctrl');

const companyRouter = new Router();  

companyRouter.get('/', companyDBController.getCompanies);
companyRouter.get('/:_id', companyDBController.getCompany);
companyRouter.delete('/:_id', companyDBController.deleteCompany);

module.exports = {companyRouter};
