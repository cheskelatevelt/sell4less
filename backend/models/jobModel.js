import mongoose from "mongoose";

const jobsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    seller: { type: mongoose.Schema.Types.ObjectID, ref: "User" },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    price: {type: Number, required: true},
    category: { type: String, required: true },
    description: { type: String, required: true },
      
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("Jobs", jobsSchema);

export default Job;
