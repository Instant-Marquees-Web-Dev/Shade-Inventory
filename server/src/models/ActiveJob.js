import mongoose from "mongoose";

var Schema = mongoose.Schema;

const activeJobSchema = new Schema({
  suburb: String, //Job site
  setupDate: Date, //Job start date
  pulldownDate: Date, //Job end dtae
  teamLeader: String, //Supervisor during setup
  stock: {
    marquees: [String], //Future implementation
    umbrellas: [String], //Future implementation
    furntiture: [String], //Future implementation
    structures: [
      {
        //Array of structures set up at job
        size: Number, //3m, 6m or 9m
        length: Number, //Length of structure i.e: 3x , 6x, 9x, 12x etc
        type: String, //Dome or Apex
        Notes: String //Any additional notes
      }
    ]
  }
});

export const ActiveJob = mongoose.model("ActiveJob", activeJobSchema);
