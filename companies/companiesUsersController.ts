import { CompanyUsersCollection } from "./companiesUsersModel";

const CompanyUsersController = {
  getCompaniesUsers: async (req, res) => {
    const params = {};
    if (req.query.googleID) {
      params["googleID"] = req.query.googleID;
      await CompanyUsersCollection.find(params)
        .then((docs) => {
          res.json(docs);
        })
        .catch((err) => console.log(`Error getting the data from DB: ${err}`));
    } else {
      await CompanyUsersCollection.find({})
        .then((docs) => {
          res.json(docs);
        })
        .catch((err) => console.log(`Error getting the data from DB: ${err}`));
    }
  },
  getCompanyUser: async (req, res) => {
    await CompanyUsersCollection.findById({ _id: req.params.id })
      .then((docs) => {
        res.json(docs);
      })
      .catch((err) => console.log(`Error getting the data from DB: ${err}`));
  },
  addCompanyUser: async (req, res) => {
    const addCompanyUser = req.body.addCompanyUser;
    await CompanyUsersCollection.insertMany(addCompanyUser)
      .then((docs) => {
        res.json(docs);
      })
      .catch((err) => console.log(`Error getting the data from DB: ${err}`));
  },
  updateCompanyUser: async (req, res) => {
    const updateCompanyUser = req.body.updateCompanyUser;
    await CompanyUsersCollection.updateOne(
      { id: req.params.id },
      updateCompanyUser
    )
      .then((docs) => {
        console.log("Success update company user");
      })
      .catch((err) => console.log(`Error getting the data from DB: ${err}`));
  },
};

export default CompanyUsersController;
