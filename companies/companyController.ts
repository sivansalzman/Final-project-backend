import { CompanyCollection } from "./companyModel";

const ComController = {
  getCompanies: async (req, res) => {
    await CompanyCollection.find({})
      .then((docs) => {
        res.json(docs);
      })
      .catch((err) => console.log(`Error getting the data from DB: ${err}`));
  },
  getCompany: async (req, res) => {
    await CompanyCollection.findById({ _id: req.params.id })
      .then((docs) => {
        res.json(docs);
      })
      .catch((err) => console.log(`Error getting the data from DB: ${err}`));
  },
  addCompany: async (req, res) => {
    const addComapny = req.body.addComapny;
    await CompanyCollection.insertMany(addComapny)
      .then((docs) => {
        res.json(docs);
      })
      .catch((err) => console.log(`Error getting the data from DB: ${err}`));
  },
  updateCompany: async (req, res) => {
    const updateCompany = req.body.updateCompany;
    await CompanyCollection.updateOne({ id: req.params.id }, updateCompany)
      .then((docs) => {
        console.log(docs);
      })
      .catch((err) => console.log(`Error getting the data from DB: ${err}`));
  },
  deleteCompany: async (req, res) => {
    await CompanyCollection.findOneAndDelete({ id: req.params.id })
      .then((docs) => {
        res.json(docs);
      })
      .catch((err) => console.log(`Error getting the data from DB: ${err}`));
  },
};

export default ComController;
