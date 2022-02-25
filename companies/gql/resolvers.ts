import { ApolloError } from "apollo-server-errors";
import { Company } from "../types";
import { getCompanies } from "../models/companies";

const resolvers = {
  Query: {
    getCompanies: async (parent, args, context, info) => {
      const { org_id } = context.payload;
      const x = getCompanies();
      return x;
    },
  },
};
export default resolvers;
