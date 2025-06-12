import mongoose from 'mongoose';


const chartSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  datasetsId: { type: mongoose.Schema.Types.ObjectId, ref: "Dataset" },
  description: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to User 
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }

}, { timestamps: true });

const Chart = mongoose.model("Chart", chartSchema);

export default Chart
