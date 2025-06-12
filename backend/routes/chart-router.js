import express from "express"
import Chart from "../models/Chart.js";
import Dataset from "../models/Dataset.js";
const chartRouter = express.Router();

chartRouter.post("/new-chart", (req, res) => {
  const chartData = req.body;

  const { type, title, descrtiption, user } = chartData;
  const { datasets } = chartData;

  const chartObj = { type, title, descrtiption, user }
  const datasetobj = { datasets }

  const chartDocument = new Chart(chartObj);
  const datasetDocument = new Dataset(datasetobj);

  chartDocument.datasetsId = datasetDocument.id;
  datasetDocument.chartId = chartDocument.id;

  console.log(chartDocument, datasetDocument);

  if (chartDocument && datasetDocument) res.status(200).send("OK");

})
chartRouter.post("/deleate-chart", (req, res) => {
  const chartData = req.body;
  if (chartData) res.status(200).send("OK");
})

export default chartRouter;

