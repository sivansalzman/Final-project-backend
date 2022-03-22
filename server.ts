import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./.gql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import express from "express";
import { promisify } from "util";

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

  //   app.get("/matchingCompanies/:id", async (req, res) => {
  //     const { id } = req.params;
  //     console.log(process.cwd());
  //     const exec = require("child_process").exec;
  //     const execPromise = promisify(exec);
  //     let func = "candidate"; //func = candidate-companies to candidate,func=company rate company
  //     let candidates = "malcolm jones"; //if func = candidates then candidate is single user full_name, func=company candidates list of full name
  //     const parent = execPromise(
  //       `/usr/bin/python3 Talent.AI/clustering/k-means.py --func ${func} --cand ${candidates}`
  //     );
  //     parent.child.stdout.on("data", (data) => {
  //       process.stdout.write(`data on stdout:${data}`);
  //     });
  //     parent.child.stderr.on("data", (data) => {
  //       process.stderr.write(`data on stderr:${data}`);
  //     });
  //     parent.child.on("close", (code) => {
  //       console.log(`close in code:${code}`);
  //     });
  //     await parent;
  //     console.log("python done");
  //     res.send("python done");
  //   });

  app.listen(process.env.SERVER_PORT, () => {
    console.log(
      `Server ready at http://localhost:${process.env.SERVER_PORT}/graphql`
    );
  });
}

startApolloServer();
