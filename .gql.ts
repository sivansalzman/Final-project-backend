import {
  typeDefs as companiesTypeDefs,
  resolvers as companiesResolvers,
} from "./companies/gql";

const typeDefs = [companiesTypeDefs];
const resolvers = [companiesResolvers];

export { typeDefs, resolvers };
