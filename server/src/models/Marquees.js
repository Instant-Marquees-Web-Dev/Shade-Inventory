import mongoose from "mongoose";

var Schema = mongoose.Schema;

const marqueesSchema = new Schema({
  size: Number, // (30, 40) ml
  type: String, // "3x3","6x3" etc
  color: String, // "white","red" etc
  quality: String, // "wedding","festival","clean","normal"
  count: Number // Number of marquees
});

export const Marquees = mongoose.model("Marquees", marqueesSchema);
