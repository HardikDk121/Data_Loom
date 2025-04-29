export { default as RadialChart } from './RadialChart';
export { default as RadialChartStacked } from './RadialChartStacked';

import {
    RadialChart,
    RadialChartStacked,
  } from "./RadialIndex";
  
  export const radialChartsArray = [
    <RadialChart key="radial" className="w-full" />,
    <RadialChartStacked key="radial-stacked" className="w-full" />,
  ];
  