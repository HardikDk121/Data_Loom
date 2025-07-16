import mongoose from 'mongoose';

const dataPointSchema = new mongoose.Schema({
  label: { type: String, required: true }, // e.g. "January"
  values: { type: Map, of: Number } // e.g. { "uv": 400, "pv": 2400 }
});

const datasetSchema = new mongoose.Schema({
  chartId: { type: mongoose.Schema.Types.ObjectId, ref: 'Chart', required: true },

  // An array of objects like: { label: "Jan", values: { uv: 400, pv: 2400 } }
  datasets: {
    type: [dataPointSchema],
    required: true
  },

  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true });

const Dataset = mongoose.model("Dataset", datasetSchema);

export default Dataset;
