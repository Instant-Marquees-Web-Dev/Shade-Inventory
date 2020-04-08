import mongoose from "mongoose";
import TeamLeader from "../models/TeamLeader";

export default {
  Query: {
    getPhoneNumber: async (root, args, context) => {
      const teamLeader = await TeamLeader.findOne(args);

      return teamLeader.phone;
    },

    getName: async (root, args, context) => {
      const teamLeader = await TeamLeader.findOne(args);

      return teamLeader.name;
    },

    getEmail: async (root, args, context) => {
      const teamLeader = await TeamLeader.findOne(args);

      return teamLeader.email;
    },

    getAllTeamLeaders: (root, args, context) => {
      return TeamLeader.find({});
    },
  },

  Mutation: {
    addTeamLeader: async (root, args, context) => {
      const teamLeader = await TeamLeader.create(args);
      if (!teamLeader) {
        throw new Error("Error: Couldnt create new MongoDB document");
      }
      return teamLeader;
    },

    editPhone: async (root, args, context) => {
      const updated = await TeamLeader.findByIdAndUpdate(args.id, args, {
        new: true,
      });
      if (!updated) {
        throw new Error("Error: Updated phone number");
      }
      return updated;
    },

    editEmail: async (root, args, context) => {
      const updated = await TeamLeader.findByIdAndUpdate(args.id, args, {
        new: true,
      });
      if (!updated) {
        throw new Error("Error: Updated Email");
      }
      return updated;
    },

    editName: async (root, args, context) => {
      const updated = await TeamLeader.findByIdAndUpdate(args.id, args, {
        new: true,
      });
      if (!updated) {
        throw new Error("Error: Updated Name");
      }
      return updated;
    },
  },
};
