import express from "express"
import Chart from "../models/Chart.js";
import Dataset from "../models/Dataset.js";
const chartRouter = express.Router();

chartRouter.post("/new-chart", async (req, res) => {
  try {
    const chartData = req.body;

    const { type, title, descrtiption, id, datasets } = chartData;

    const chartObj = { type, title, descrtiption, user: id }
    const datasetobj = { datasets, user: id }

    const chartDocument = new Chart(chartObj);
    const datasetDocument = new Dataset(datasetobj);

    chartDocument.datasetsId = datasetDocument.id;
    datasetDocument.chartId = chartDocument.id;

    if (chartDocument && datasetDocument) {
      await chartDocument.save();
      await datasetDocument.save();
      console.log("documetns saved\n ", chartDocument, "\n", datasetDocument)
      res.status(200).send("OK");
    }
  } catch (error) {
    console.error("error occured: \n", error);
  }
})
chartRouter.post("/deleate-chart", async (req, res) => {
  const chartData = req.body;
  if (chartData) res.status(200).send("OK");
})
chartRouter.post("/find-charts", async (req, res) => {
  const id = req.body.id;
  console.log(id);
  const userCharts = await Chart.find({ user: id }).populate({ path: "datasetsId", select: "datasets" });
  console.log(userCharts);
  res.json(userCharts).status(200);
})
export default chartRouter;

