import mongoose from 'mongoose';

const datasetSchema = new mongoose.Schema({
  chartId: { type: mongoose.Schema.Types.ObjectId, ref: 'Chart', required: true },
  datasets:
  {
    type: [
      {
        dataKey: { type: String },
        label: { type: String, required: true },
        data: { type: [Number], required: true },
      }
    ],
    required: true
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, { timestamps: true });

const Dataset = mongoose.model("Dataset", datasetSchema);

export default Dataset;
