import { ApolloServer } from "apollo-server";
import { typeDefs, resolvers } from "./.gql";

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  apollo: {
    key: process.env.APOLLO_KEY,
    graphId: process.env.APOLLO_GRAPH_ID,
    graphVariant: process.env.SERVER_ENVIRONMENT,
  },
  context: ({ req }) => {
    const payload = req;
    return {
      payload,
    };
  },
});

apolloServer
  .listen({
    port: process.env.SERVER_PORT,
  })
  .then(async ({ url }) => {
    console.log(`Server ready at ${url}graphql`);
  });
