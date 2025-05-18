export { default as BarChart } from './BarChart';
export { default as BarChartHorizontal } from './BarChartHorizontal';
export { default as BarChartMultiple } from './BarChartMultiple';
export { default as BarChartNegative } from './BarChartNegative';

import {
    BarChart,
    BarChartHorizontal,
    BarChartNegative,
    BarChartMultiple,
  } from "./BarIndex";

export const barChartsArray = [
  <BarChart key="bar" className="w-full" />,
  <BarChartHorizontal key="bar-h" className="w-full" />,
  <BarChartMultiple key="bar-m" className="w-full" />,
  <BarChartNegative key="bar-n" className="w-full" />,
];
