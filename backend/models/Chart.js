import mongoose from 'mongoose';


const chartSchema = new mongoose.Schema({
    title : { type: String, required : true },
    type : { type: String, required : true }, 
    dataset : { type: mongoose.Schema.Types.ObjectId , ref : "Dataset" },
    description : { type: String, required : true },
    labels : { type : [String] , required : true }, 
    user : { type: mongoose.Schema.Types.ObjectId, ref: "User" }, 
    config : { type: Object, required: true }, 
    createdAt : { type: Date, default: Date.now },
    updatedAt : { type: Date, default: Date.now }

},{ timestamps: true });

const Chart = mongoose.model("Chart", chartSchema);

export default Chart
