import { BarChart } from 'recharts';
import { chartWrapper, IResourceChartProps } from '../ChartWrapper';

export { IResourceChartProps };

export const ResourceBarChart = chartWrapper(BarChart);
