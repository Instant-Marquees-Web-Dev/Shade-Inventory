import mongoose from "mongoose";

var Schema = mongoose.Schema;

const teamLeaderSchema = new Schema({
  name: String,
  phone: String,
  email: String,
});

export default mongoose.model("TeamLeader", teamLeaderSchema);
