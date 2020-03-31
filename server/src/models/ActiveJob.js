import mongoose from "mongoose";

var Schema = mongoose.Schema;

const activeJobSchema = new Schema({
  suburb: String, //Job site
  address: String, //Job Address
  setupDate: Date, //Job start date
  pulldownDate: Date, //Job end dtae
  teamLeader: String, //Supervisor during setup

  structures: [
    {
      //Array of structures set up at job
      size: Number, //3m, 6m or 9m
      length: Number, //Length of structure i.e: 3x , 6x, 9x, 12x etc
      structureType: String, //Dome or Apex
      Notes: String //Any additional notes
    }
  ]
});

export default mongoose.model("ActiveJob", activeJobSchema);
