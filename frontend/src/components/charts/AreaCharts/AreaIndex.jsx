// Barrel import for all components in the AreaCharts folder
export { default as AreaChart } from './AreaChart';
export { default as AreaChartLinear } from './AreaChartLinear';
export { default as AreaChartStep } from './AreaChartStep';

import {
    AreaChart,
    AreaChartLinear,
    AreaChartStep,
  } from "./AreaIndex";
  
export const areaChartsArray = [
    <AreaChart key="area" className="w-full" />,
    <AreaChartLinear key="area-linear" className="w-full" />,
    <AreaChartStep key="area-step" className="w-full" />,
  ];
// Add more exports as needed for other components in this folder
