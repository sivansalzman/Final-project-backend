const { response } = require('express');
const Candidate = require('../models/candidate');

exports.candidateDBController = {
    getCandidates(req, res) {
        Candidate.find({})
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    
    },
    getCandidate(req, res) {
        Candidate.findOne({id: req.params.id})
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));

    },
    
    deleteCandidate(req, res) {
        Candidate.findOneAndDelete({googleID: req.params.id})
            .then(() => res.json({googleID: `${req.params.id}`}))
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    },
};