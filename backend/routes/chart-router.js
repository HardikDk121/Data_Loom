import express from "express"
//import Chart from "../models/Chart.js";

const chartRouter = express.Router();

chartRouter.post("/newchart", (req, res) => {
  const chartData = req.body;
  if (chartData) res.status(200).send("OK");
})

export default chartRouter;

