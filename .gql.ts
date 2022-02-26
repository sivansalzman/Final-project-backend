import {
  typeDefs as companiesTypeDefs,
  resolvers as companiesResolvers,
} from "./companies/gql";

import {
  typeDefs as candidatesTypeDefs,
  resolvers as candidatesResolvers,
} from "./candidates/gql";

const typeDefs = [companiesTypeDefs, candidatesTypeDefs];
const resolvers = [companiesResolvers, candidatesResolvers];

export { typeDefs, resolvers };
