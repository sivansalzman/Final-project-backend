import { JobOfferCollection } from "./jobofferModel";

const JobofferController = {
  getJobsOffers: async (req, res) => {
    const params = {};
    if (req.query.candidates_id) {
      params["candidates_id"] = req.query.candidates_id;
      console.log(params);
      await JobOfferCollection.find({
        id: { $in: req.query.candidates_id },
      })
        .then((docs) => {
          res.json(docs);
        })
        .catch((err) => console.log(`Error getting the data from DB: ${err}`));
    } else if (req.query.job_company_name) {
      params["job_company_name"] = req.query.job_company_name; // TODO: FIX
      await JobOfferCollection.find(params)
        .then((docs) => {
          res.json(docs);
        })
        .catch((err) => console.log(`Error getting the data from DB: ${err}`));
    } else {
      await JobOfferCollection.find(params)
        .then((docs) => {
          res.json(docs);
        })
        .catch((err) => console.log(`Error getting the data from DB: ${err}`));
    }
  },
  getJobOffer: async (req, res) => {
    await JobOfferCollection.findById({ _id: req.params.id })
      .then((docs) => {
        res.json(docs);
      })
      .catch((err) => console.log(`Error getting the data from DB: ${err}`));
  },
  addJobOffer: async (req, res) => {
    const addJobOffer = req.body.addJobOffer;
    await JobOfferCollection.insertMany(addJobOffer)
      .then((docs) => {
        res.json(docs);
      })
      .catch((err) => console.log(`Error getting the data from DB: ${err}`));
  },
  updateJobOffer: async (req, res) => {
    const updateJobOffer = req.body.updateJobOffer;
    if (updateJobOffer["candidates_id"]) {
      await JobOfferCollection.updateOne(
        { _id: req.params.id },
        { $push: { candidates_id: updateJobOffer.candidates_id } }
      )
        .then((docs) => {
          res.json(docs);
        })
        .catch((err) => console.log(`Error getting the data from DB: ${err}`));
    } else {
      const update = req.body.updateJobOffer;
      await JobOfferCollection.findOneAndUpdate(
        { _id: req.params.id },
        { $set: update },
        { new: true, useFindAndModify: false }
      )
        .then((docs) => {
          res.json(docs);
        })
        .catch((err) => console.log(`Error getting the data from DB: ${err}`));
    }
  },
  deleteJobOffer: async (req, res) => {
    await JobOfferCollection.findOneAndDelete({ _id: req.params.id })
      .then((docs) => {
        res.json(docs);
      })
      .catch((err) => console.log(`Error getting the data from DB: ${err}`));
  },
};

export default JobofferController;
