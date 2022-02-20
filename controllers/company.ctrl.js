const Company = require('../models/company');

exports.companyDBController = {
    getCompanies(req, res) {
        Company.find({})
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    
    },
    getCompany(req, res) {
        Company.findOne({_id: req.params.id})
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));

    },
    
    deleteCompany(req, res) {
        Company.findOneAndDelete({_id: req.params.id})
            .then(() => res.json({id: `${req.params.id}`}))
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    },
    
};