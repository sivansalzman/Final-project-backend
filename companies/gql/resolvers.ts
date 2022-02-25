import { ApolloError } from "apollo-server-errors";
import { Company, GetCompanyInput } from "../types";
import { getCompanies, getCompany } from "../models/companies";

const resolvers = {
  Query: {
    getCompanies: async (parent, args, context, info) => {
      const { org_id } = context.payload;
      const companies = getCompanies();
      return companies;
    },
    getCompany: async (parent, args, context, info) => {
      const { org_id } = context.payload;
      const { companyName } = args.getCompanyInput as GetCompanyInput;
      const company = getCompany(companyName);
      return company;
    },
  },
};
export default resolvers;
