const { Router } = require('express'); 
const{ companyDBController} = require('../controllers/company.ctrl');

const companyRouter = new Router();  

companyRouter.get('/', companyDBController.getCompanies);

module.exports = {companyRouter};
