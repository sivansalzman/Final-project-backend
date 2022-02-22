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
    createCandidate(req,res) {
        const {body} = req;
        const newCandidate = new Candidate();

        if (body === null) {
            res.sendStatus(400)
        }
        else {
            newCandidate.full_name = body.full_name;
            newCandidate.gender = body.gender;
            newCandidate.birth_year = body.birth_year;
            newCandidate.birth_date = body.birth_date;
            newCandidate.job_title = body.job_title;
            newCandidate.job_title_role = body.job_title_role;
            newCandidate.job_title_sub_role = body.job_title_sub_role;
            newCandidate.job_title_levels = body.job_title_levels;
            newCandidate.job_company_id = body.job_company_id;
            newCandidate.interests = body.interests;
            newCandidate.skills = body.skills;
        }
        newCandidate.save()
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
        
    },
    createTitle(req,res) {
        const body = {req}
        const newTitle ={
            "name": body.name,
            "role": body.role,
            "sub_role": body.sub_role,
            "level": body.level
        }
        Candidate.updateOne({_id: req.params._id}, {
            $push: {
                newTitle
            }
        })
            .then(() => {
                Chat.findOne({_id: req.params._id})
                    .then(docs => res.json(docs))
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    },
    createSchool(req,res) {
        const body = {req}
        const newSchool = {
            "name": body.name,
            "type": body.type,
            "id": body.id,
            "location": body.location,
            "linkedin_url": body.linkedin_url,
            "facebook_url": body.facebook_url,
            "twitter_url": body.twitter_url,
            "website": body.website,
            "domain": body.domain
        }
        Candidate.updateOne({_id: req.params._id}, {
            $push: {
                newSchool
            }
        })
            .then(() => {
                Chat.findOne({_id: req.params.id})
                    .then(docs => res.json(docs))
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    },
    createEducation(req,res) {
        const body = {req}
        const newEducation = {
            "school": body.school,
            "degrees": body.degrees,
            "start_date": body.start_date,
            "end_date": body.start_end,
            "majors": body.majors,
            "minors": body.minors,
            "gpa": body.gpa
        }
        Candidate.updateOne({_id: req.params._id}, {
            $push: {
                newEducation
            }
        })
            .then(() => {
                Chat.findOne({_id: req.params.id})
                    .then(docs => res.json(docs))
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    },
    createExperience(req,res) {
        const body = {req}
        const newExperience = {
            "company": body.company,
        }
        Candidate.updateOne({_id: req.params._id}, {
            $push: {
                newExperience
            }
        })
            .then(() => {
                Chat.findOne({_id: req.params.id})
                    .then(docs => res.json(docs))
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    },
    createCompanyExperience(req,res) {
        const body = {req}
        const newCompanyExperience = {
            "company_id": body.company_id,
            "location_names": body.location_names,
            "end_date": body.end_date,
            "start_date": body.start_date,
            "is_primary": body.is_primary,
        }
        Candidate.updateOne({_id: req.params._id}, {
            $push: {
                newCompanyExperience
            }
        })
            .then(() => {
                Chat.findOne({_id: req.params._id})
                    .then(docs => res.json(docs))
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    },
    deleteCandidate(req, res) {
        Candidate.findOneAndDelete({id: req.params.id})
            .then(() => res.json({googleID: `${req.params.id}`}))
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    },
};