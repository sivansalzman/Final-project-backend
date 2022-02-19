const { Schema, model } = require('mongoose');

const candidateSchema = new Schema({
    id: { type: Number},
},{collection: 'candidates'});


const Candidate = model('Candidate', candidateSchema);

module.exports = Candidate;