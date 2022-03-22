import { CandidateCollection } from "./candidateModel";

const CandidateController = {
  getCandidates: async (req, res) => {
    const params = {};
    if (req.query.full_name) {
      params["full_name"] = req.query.full_name;
      await CandidateCollection.find(params)
        .then((docs) => {
          res.json(docs);
        })
        .catch((err) => console.log(`Error getting the data from DB: ${err}`));
    } else if (req.query.candidates) {
      await CandidateCollection.find({
        id: { $in: req.query.candidates },
      })
        .then((docs) => {
          res.json(docs);
        })
        .catch((err) => console.log(`Error getting the data from DB: ${err}`));
    } else {
      await CandidateCollection.find({})
        .then((docs) => {
          res.json(docs);
        })
        .catch((err) => console.log(`Error getting the data from DB: ${err}`));
    }
  },
  getCandidate: async (req, res) => {
    await CandidateCollection.findOne({ id: req.params.id })
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
