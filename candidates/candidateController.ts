import { CandidateCollection } from "./candidateModel";
import axios from "axios";
import { ObjectId } from "mongodb";

const getCandidatehelper = async (id) => {
  try {
    return await CandidateCollection.findById(new ObjectId(id))
      .lean()
      .then((docs) => {
        return docs;
      })
      .catch((err) => console.log(`Error getting the data from DB: ${err}`));
  } catch (err) {
    console.log(err);
  }
};

export const getCandidatesHelper = async (ids: [string]) => {
  try {
    return await CandidateCollection.find({ _id: { $in: ids } })
      .lean()
      .then((docs) => {
        return docs;
      })
      .catch((err) => console.log(`Error getting the data from DB: ${err}`));
  } catch (err) {
    console.log(err);
  }
};

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
    } else if (req.query.googleID) {
      params["googleID"] = req.query.googleID;
      await CandidateCollection.find(params)
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
    try {
      const candidate = await getCandidatehelper(req.params.id);
      res.json(candidate);
    } catch (err) {
      console.log(err);
    }
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
    const updateCandidate = req.body.update;
    await CandidateCollection.updateMany(
      { _id: req.params.id },
      updateCandidate
    )
      .then((docs) => {
        res.json(docs);
      })
      .catch((err) => console.log(`Error getting the data from DB: ${err}`));
  },

  updateCandidateEducation: async (req, res) => {
    const updateEducation = req.body.updateEducation;
    await CandidateCollection.updateMany(
      { _id: req.params.id },
      {
        $set: {
          [`education.${req.params.index}`]: updateEducation,
        },
      }
    )
      .then((docs) => {
        res.json(docs);
      })
      .catch((err) => console.log(`Error getting the data from DB: ${err}`));
  },

  updateCandidateExperience: async (req, res) => {
    const updateExperience = req.body.updateExperience;
    await CandidateCollection.updateMany(
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

  deleteCandidate: async (req, res) => {
    await CandidateCollection.findOneAndDelete({ id: req.params.id })
      .then((docs) => {
        res.json(docs);
      })
      .catch((err) => console.log(`Error getting the data from DB: ${err}`));
  },

  forAlgo: async (req, res) => {
    try {
      const candidate = await getCandidatehelper(req.params.id);
      console.log(candidate);
      const percents = await axios.post(
        "http://127.0.0.1:4000/api/candidate",
        candidate
      );
      console.log(percents);
      const sortable = Object.entries(percents.data)
        .sort(([, a], [, b]) => a[0] - b[0])
        .reduce((r, [k, v]) => ({ ...r, [k]: v[0] }), {});
      res.json({ data: sortable, order: Object.keys(sortable) });
    } catch (err) {
      console.log(err);
    }
  },
};

export default CandidateController;
