const { Schema, model } = require('mongoose');

const companySchema = new Schema({
    id: { type: Number},
},{collection: 'companies'});


const Company = model('Company', companySchema);

module.exports = Company;