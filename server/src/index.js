import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import cors from "cors";

const startServer = async () => {
  const app = express();
  app.use(cors());
  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  server.applyMiddleware({ app });

  try {
    await mongoose.connect(
      "mongodb+srv://shade:shade@cluster0-gzrz8.mongodb.net/test?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true },
      console.log("Connected to shade@cluster0-gzrz8.mongodb.net")
    );
  } catch (err) {
    console.log(err);
  }

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();
