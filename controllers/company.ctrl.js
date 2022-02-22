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
    addCompany(req,res) {
        const newCompany = new Company({
            "name": req.body.name,
            "size": req.body.size,
            "employee_count": req.body.employee_count,
            "founded": req.body.founded,
            "industry": req.body.industry,
            "location": req.body.location,
            "linkedin_id": req.body.linkedin_id,
            "linkedin_url": req.body.linkedin_url,
            "facebook_url": req.body.facebook_url,
            "twitter_url": req.body.twitter_url,
            "profiles": req.body.profiles,
            "website": req.body.website,
            "ticker": req.body.ticker,
            "type": req.body.type,
            "summery": req.body.summery,
            "tags": req.body.tags,
            "headline": req.body.headline,
            "alternative_names": req.body.alternative_names,
            "alternative_domains": req.body.alternative_domains,
            "affiliated_profiles": req.body.affiliated_profiles,
        });
        newCompany.save()
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    },
    deleteCompany(req, res) {
        Company.findOneAndDelete({_id: req.params.id})
            .then(() => res.json({id: `${req.params.id}`}))
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    },
    
};