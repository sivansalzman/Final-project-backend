import { ApolloError } from "apollo-server-errors";
import { Company } from "../types";

const resolvers ={
    Query: {
        getCompanies: async (parent, args, context, info) => {
            const { org_id } = context.payload;
        }
    }
}
export default resolvers;
