import {
  typeDefs as companiesTypeDefs,
  resolvers as companiesResolvers,
} from "./companies/gql";

import {
  typeDefs as candidatesTypeDefs,
  resolvers as candidatesResolvers,
} from "./candidates/gql";

import {
  typeDefs as jobOffersTypeDefs,
  resolvers as jobOffersResolvers,
} from "./job-offer/gql";

const typeDefs = [companiesTypeDefs, candidatesTypeDefs, jobOffersTypeDefs];
const resolvers = [companiesResolvers, candidatesResolvers, jobOffersResolvers];

export { typeDefs, resolvers };
