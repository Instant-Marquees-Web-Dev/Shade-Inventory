import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  server.applyMiddleware({ app });
  
  try {
    await mongoose.connect(
      "mongodb+srv://shade:shade@cluster0-gzrz8.mongodb.net/test?retryWrites=true&w=majority",
      { useNewUrlParser: true }
    );
  } catch (err) {
    console.log(err);
  }

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();
