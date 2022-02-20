const { Schema, model } = require('mongoose');

const jobOfferSchema = new Schema({

},{collection: 'jobOffers'});


const JobOffer = model('JobOffer', jobOfferSchema);

module.exports = JobOffer;