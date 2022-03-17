import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./.gql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import express from "express";

async function startApolloServer() {
  const app = express();

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const server = new ApolloServer({
    schema: schema,
  });

  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });

  app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server ready at http://localhost:${process.env.SERVER_PORT}/graphql`);
  });
}

startApolloServer();
