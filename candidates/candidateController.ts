import { response } from "express";
import { CandidateCollection } from "./candidateModel";
import {
  AddCandidateInput,
  Candidate,
  DeleteCandidateInput,
  GetCandidateInput,
  GetCandidatesInput,
  GetCandidatesInputFullName,
  UpdateCandidateInput,
} from "./candidatesTypes";

const CandidateController = {
  getCandidates: async (req, res) => {
    await CandidateCollection.find({})
      .then((docs) => {
        res.json(docs);
      })
      .catch((err) => console.log(`Error getting the data from DB: ${err}`));
  },
  getCandidate: async (req, res) => {
    await CandidateCollection.findById({ _id: req.params.id })
      .then((docs) => {
        res.json(docs);
      })
      .catch((err) => console.log(`Error getting the data from DB: ${err}`));
  },

  getCandidatesById: async (req, res) => {
    await CandidateCollection.find({
      _id: { $in: req.params.id },
    })
      .then((docs) => {
        res.json(docs);
      })
      .catch((err) => console.log(`Error getting the data from DB: ${err}`));
  },

  getCandidatesByFullName: async (req, res) => {
    await CandidateCollection.findOne({ _id: req.params.id })
      .then((docs) => {
        res.json(docs);
      })
      .catch((err) => console.log(`Error getting the data from DB: ${err}`));
  },
  addCandidate: async (req, res) => {
    const addCandidate = req.body.addCandidate;
    await CandidateCollection.insertMany(addCandidate)
      .then((docs) => {
        res.json(docs);
      })
      .catch((err) => console.log(`Error getting the data from DB: ${err}`));
  },
  updateCandidate: async (req, res) => {
    const updateCandidate = req.body.updateCandidate;
    await CandidateCollection.updateOne({ id: req.params.id }, updateCandidate)
      .then((docs) => {
        console.log(docs);
      })
      .catch((err) => console.log(`Error getting the data from DB: ${err}`));
  },
  deleteCandidate: async (req, res) => {
    await CandidateCollection.findOneAndDelete({ id: req.params.id })
      .then((docs) => {
        res.json(docs);
      })
      .catch((err) => console.log(`Error getting the data from DB: ${err}`));
  },
};

export default CandidateController;
