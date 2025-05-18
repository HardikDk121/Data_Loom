export { default as LineChart } from './LineChart';
export { default as LineChartLinear } from './LineChartLinear';
export { default as LineChartStep } from './LineChartStep';

import{
    LineChart,
    LineChartLinear,
    LineChartStep,
  } from "./LineIndex";
  
export const lineChartsArray = [
    <LineChart key="line" className="w-full" />,
    <LineChartLinear key="line-l" className="w-full" />,
    <LineChartStep key="line-s" className="w-full" />,
  ];
  