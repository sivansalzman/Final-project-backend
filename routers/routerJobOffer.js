const { Router } = require('express'); 
const{ jobOfferDBController} = require('../controllers/jobOffer.ctrl');

const jobOfferRouter = new Router();  


module.exports = {jobOfferRouter};
