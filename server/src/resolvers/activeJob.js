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
    addJob: async (root, args, context, info) => {
      const activeJob = await ActiveJob.create(args);
      if (!activeJob) {
        throw new Error("Error: Couldnt create new MongoDB document");
      }
      return activeJob;
    },

    editSuburb: async (root, args, context, info) => {
      const updatedJob = await ActiveJob.findByIdAndUpdate(args.id, args);
      if (!updatedJob) {
        throw new Error("Error: Updated Job");
      }
      return updatedJob;
    },

    editSetupDate: async (root, args, context, info) => {
      const updatedJob = await ActiveJob.findByIdAndUpdate(args.id, args);
      if (!updatedJob) {
        throw new Error("Error: Updated Job");
      }
      return updatedJob;
    },

    editPulldownDate: async (root, args, context, info) => {
      const updatedJob = await ActiveJob.findByIdAndUpdate(args.id, args);
      if (!updatedJob) {
        throw new Error("Error: Updated Job");
      }
      return updatedJob;
    },

    editTeamLeader: async (root, args, context, info) => {
      const updatedJob = await ActiveJob.findByIdAndUpdate(args.id, args);
      if (!updatedJob) {
        throw new Error("Error: Updated Job");
      }
      return updatedJob;
    }
  }
};
