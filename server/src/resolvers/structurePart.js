import mongoose from "mongoose";
import StructurePart from "../models/StructurePart";

export default {
  Query: {
    getPartCount: async (root, args, context) => {
      const structurePart = await StructurePart.findOne(args);

      return structurePart.count;
    },

    getPartSpecification: async (root, args, context) => {
      const structurePart = await StructurePart.findOne(args);

      return structurePart.specification;
    },

    getAllStructureParts: (root, args, context) => {
      return StructurePart.find({});
    },
  },

  Mutation: {
    addStructurePart: async (root, args, context) => {
      const structurePart = await StructurePart.create(args);
      if (!structurePart) {
        throw new Error(
          "Error: Couldnt create new MongoDB document: Structure Part"
        );
      }
      return structurePart;
    },

    editPartCount: async (root, args, context) => {
      const updated = await StructurePart.findByIdAndUpdate(args.id, args);
      if (!updated) {
        throw new Error("Error: Updating Part Count");
      }
      return updated;
    },

    editPartName: async (root, args, context) => {
      const updated = await StructurePart.findByIdAndUpdate(args.id, args);
      if (!updated) {
        throw new Error("Error: Updating part name");
      }
      return updated;
    },

    editPartSpecification: async (root, args, context) => {
      const updated = await StructurePart.findByIdAndUpdate(args.id, args);
      if (!updated) {
        throw new Error("Error: Updating part spec");
      }
      return updated;
    },
  },
};
