import { LineChart } from 'recharts';
import { chartWrapper, IResourceChartProps } from '../ChartWrapper';

export { IResourceChartProps };

export const ResourceLineChart = chartWrapper(LineChart);
