import { JobOfferCollection } from "./jobofferModel";
import { getCandidatesHelper } from "../candidates/candidateController";
import axios from "axios";

const getJobOfferHelper = async (id) => {
  return await JobOfferCollection.findById(id)
    .lean()
    .then((docs) => {
      return docs;
    })
    .catch((err) => console.log(`Error getting the data from DB: ${err}`));
};

const JobofferController = {
  getJobsOffers: async (req, res) => {
    const params = {};
    if (req.query.candidates_id) {
      params["candidates_id"] = req.query.candidates_id;
      await JobOfferCollection.find({
        id: { $in: req.query.candidates_id },
      })
        .then((docs) => {
          res.json(docs);
        })
        .catch((err) => console.log(`Error getting the data from DB: ${err}`));
    } else if (req.query.job_company_name) {
      params["job_company_name"] = req.query.job_company_name;
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
    const jobOffer = await getJobOfferHelper(req.params.id);
    res.json(jobOffer);
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
    if (updateJobOffer["candidates_id"] !== undefined) {
      await JobOfferCollection.updateOne(
        { _id: req.params.id },
        { $push: { candidates_id: updateJobOffer.candidates_id } }
      )
        .then((docs) => {
          res.json(docs);
        })
        .catch((err) => console.log(`Error getting the data from DB: ${err}`));
    } else if (updateJobOffer["candidates_id_new"] !== undefined) {
      await JobOfferCollection.updateOne(
        { _id: req.params.id },
        { $set: { candidates_id: updateJobOffer.candidates_id_new } }
      )
        .then((docs) => {
          res.json(docs);
        })
        .catch((err) => console.log(`Error getting the data from DB: ${err}`));
    } else {
      await JobOfferCollection.updateMany(
        { _id: req.params.id },
        updateJobOffer
      )
        .then((docs) => {
          res.json(docs);
        })
        .catch((err) => console.log(`Error getting the data from DB: ${err}`));
    }
  },

  updateJobOfferExp: async (req, res) => {
    const updateExperience = req.body.updateExperience;
    await JobOfferCollection.updateMany(
      { _id: req.params.id },
      {
        $set: {
          [`experience.${req.params.index}`]: updateExperience,
        },
      }
    )
      .then((docs) => {
        res.json(docs);
      })
      .catch((err) => console.log(`Error getting the data from DB: ${err}`));
  },

  deleteJobOfferExp: async (req, res) => {
    await JobOfferCollection.updateOne(
      { _id: req.params.id },
      {
        $pull: {
          experience: { title_name: req.params.index },
        },
      }
    )
      .then((docs) => {
        res.json(docs);
      })
      .catch((err) => console.log(`Error getting the data from DB: ${err}`));
  },

  deleteJobOffer: async (req, res) => {
    await JobOfferCollection.findOneAndDelete({ _id: req.params.id })
      .then((docs) => {
        res.json(docs);
      })
      .catch((err) => console.log(`Error getting the data from DB: ${err}`));
  },

  rankCandidates: async (req, res) => {
    try {
      let jobOffer = await getJobOfferHelper(req.params.id);
      const candidates_ids = req.body.candidates;
      const bias = req.body.bias;

      let candidates: any = await getCandidatesHelper(candidates_ids);

      const data = { candidates: candidates, job_offer: jobOffer, bias: bias };
      const response = await (
        await axios.post("http://127.0.0.1:4000/api/company", data)
      ).data;

      let orderdCandidates: Array<Object> = [];

      for (let i in response) orderdCandidates.push(candidates[response[i][0]]);

      res.json(orderdCandidates);
    } catch (err) {
      res.status(400).json([]);
    }
  },
};

export default JobofferController;
