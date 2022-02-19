const { Schema, model } = require('mongoose');

const locationSchema = new Schema({
    name: {type: String},
    locality: {type: String},
    region: {type: String},
    metro: {type: String},
    country: {type: String},
    continent: {type: String},
    street_address: {type: String},
    address_line_2: {type: String},
    postal_code: {type: String},
    geo: {type: String},
});

const companySchema = new Schema({
    //id: { type: Number},
    name: {type: String},
    size: {type: String},
    employee_count: {type: Number},
    founded: {type: Number},
    industry: {type: String},
    location: {type: locationSchema},
    linkedin_id: {type: String},
    linkedin_url: {type: String},
    facebook_url: {type: String},
    twitter_url: {type: String},
    profiles: {type: [String]},
    website: {type: String},
    ticker: {type: String},
    summery: {type: String},
    tags: {type: [String]},
    headline: {type: String},
    alternative_names: {type: [String]},
    alternative_domains: {type: [String]},
    affiliated_profiles: {type: [String]},
    
},{collection: 'companies'});


const Company = model('Company', companySchema);

module.exports = Company;