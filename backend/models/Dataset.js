import mongoose from 'mongoose';

const datasetSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    fileURL: { type: String, required: true }, // Path to uploaded dataset (CSV, JSON, etc.)
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Reference to User
    createdAt: { type: Date, default: Date.now }
});

const Dataset = mongoose.model("Dataset", datasetSchema);

export default Dataset;