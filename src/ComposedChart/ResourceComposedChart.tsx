import { ComposedChart } from 'recharts';
import { chartWrapper, IResourceChartProps } from '../ChartWrapper';

export { IResourceChartProps };

export const ResourceComposedChart = chartWrapper(ComposedChart);
