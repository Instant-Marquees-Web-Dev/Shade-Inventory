import mongoose from "mongoose";
import ActiveJob from "../models/ActiveJob";
import { UserInputError } from "apollo-server-express";

export default {
  Query: {
    getActiveJobs: (root, args, context, info) => {
      return ActiveJob.find({});
    },
    getJob: (root, { id }, context, info) => {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new UserInputError("Not a valid Job ID");
      }
      return ActiveJob.findById(id);
    }
  },

  Mutation: {
    addJob: (root, args, context, info) => {
      return ActiveJob.create(args);
    }
  }
};
