import mongoose from "mongoose";
import TeamLeader from "../models/TeamLeaders";

export default {
  Query: {
    getPhoneNumber: async (root, args, context) => {
      const teamLeader = await TeamLeader.findOne(args);

      return teamLeader.phone;
    }
  },

  Mutation: {
    addTeamLeader: async (root, args, context) => {
      const teamLeader = await TeamLeader.create(args);
      if (!teamLeader) {
        throw new Error("Error: Couldnt create new MongoDB document");
      }
      return teamLeader;
    }
  }
};
