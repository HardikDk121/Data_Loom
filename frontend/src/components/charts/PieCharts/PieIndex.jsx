export { default as PieChart } from './PieChart';
export { default as PieChartDonut } from './PieChartDonut';

import {
    PieChart,
    PieChartDonut,
  } from "./PieIndex";
  
  export const pieChartsArray = [
    <PieChart key="pie" className="w-full" />,
    <PieChartDonut key="pie-donut" className="w-full" />,
  ];
  