import mongoose from 'mongoose';

const mongoose = require("mongoose");

const chartSchema = new mongoose.Schema({
    title: { type: String, required: true },
    type: { type: String, required: true }, 
    dataset: { type: mongoose.Schema.Types.ObjectId, ref: "Dataset" }, 
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, 
    config: { type: Object, required: true }, 
    createdAt: { type: Date, default: Date.now }
});

const Chart = mongoose.model("Chart", chartSchema);

export default Chart
