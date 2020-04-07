import mongoose from "mongoose";

var Schema = mongoose.Schema;

const structurePartSchema = new Schema({
  name: String,
  specification: String,
  count: String,
});

export default mongoose.model("StructurePart", structurePartSchema);
