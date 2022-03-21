import { CompanyCollection } from "../models/company";
import {
  AddCompanyInput,
  DeleteCompanyInput,
  GetCompanyInput,
  UpdateCompanyInput,
} from "../companies-types";

const resolvers = {
  Query: {
    getCompanies: async (parent, args, context, info) => {
      try {
        const companies = await CompanyCollection.find();
        return companies;
      } catch (err) {
        throw err;
      }
    },
    getCompany: async (parent, args, context, info) => {
      try {
        const { companyID } = args.getCompanyInput as GetCompanyInput;
        console.log(companyID);
        const company = await CompanyCollection.findById({ _id: companyID });
        return company;
      } catch (err) {
        throw err;
      }
    },
  },
  Mutation: {
    addCompany: async (parent, args, context, info) => {
      try {
        const addCompanyInput = args.addCompanyInput
          .companyInfo as AddCompanyInput;
        if (await CompanyCollection.insertMany(addCompanyInput)) {
          return true;
        }
        return false;
      } catch (err) {
        throw err;
      }
    },
    updateCompany: async (parent, args, context, info) => {
      try {
        const updateCompanyID = args.updateCompanyInput
          .companyID as UpdateCompanyInput["companyID"];
        const update = args.updateCompanyInput
          .companyInfo as UpdateCompanyInput["companyInfo"];
        if (
          await CompanyCollection.updateOne({ _id: updateCompanyID }, update)
        ) {
          return true;
        }
        return false;
      } catch (err) {
        throw err;
      }
    },
    deleteCompany: async (parent, args, context, info) => {
      try {
        const deleteCompanyID = args.deleteCompanyInput as DeleteCompanyInput;
        if (await CompanyCollection.findOneAndDelete({ id: deleteCompanyID })) {
          return true;
        }
        return false;
      } catch (err) {
        throw err;
      }
    },
  },
};

export default resolvers;
