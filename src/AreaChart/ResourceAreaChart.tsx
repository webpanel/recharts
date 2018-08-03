import { AreaChart } from 'recharts';
import { chartWrapper, IResourceChartProps } from '../ChartWrapper';

export { IResourceChartProps };

export const ResourceAreaChart = chartWrapper(AreaChart);
