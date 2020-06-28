import express from "express";
import { ApolloServer } from "apollo-server-express";

import typeDefs from "./schema";
import resolvers from "./resolvers";

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
});

server.applyMiddleware({
  app,
  path: "/graphql",
});

app.listen({ port: 5000 }, () => {
  console.log(`🚀 Server running at 5000`);
});
