import { JobOfferCollection } from "./jobofferModel";

const JobofferController = {
  getJobsOffers: async (req, res) => {
    await JobOfferCollection.find({})
      .then((docs) => {
        res.json(docs);
      })
      .catch((err) => console.log(`Error getting the data from DB: ${err}`));
  },
  getJobOffer: async (req, res) => {
    await JobOfferCollection.findById({ _id: req.params.id })
      .then((docs) => {
        res.json(docs);
      })
      .catch((err) => console.log(`Error getting the data from DB: ${err}`));
  },
  getJobOfferByCandidate: async (req, res) => {
    await JobOfferCollection.find({
      candidates_id: { $in: req.body.candidates_id },
    })
      .then((docs) => {
        res.json(docs);
      })
      .catch((err) => console.log(`Error getting the data from DB: ${err}`));
  },
  addJobOffer: async (req, res) => {
    const addJoboffer = req.body.addJoboffer;
    await JobOfferCollection.insertMany(addJoboffer)
      .then((docs) => {
        res.json(docs);
      })
      .catch((err) => console.log(`Error getting the data from DB: ${err}`));
  },
  updateJobOffer: async (req, res) => {
    const updateJobOffer = req.body.updateJobOffer;
    await JobOfferCollection.updateOne({ id: req.params.id }, updateJobOffer)
      .then((docs) => {
        console.log(docs);
      })
      .catch((err) => console.log(`Error getting the data from DB: ${err}`));
  },
  deleteJobOffer: async (req, res) => {
    await JobOfferCollection.findOneAndDelete({ id: req.params.id })
      .then((docs) => {
        res.json(docs);
      })
      .catch((err) => console.log(`Error getting the data from DB: ${err}`));
  },
};

export default JobofferController;
