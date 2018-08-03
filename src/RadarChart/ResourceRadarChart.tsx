import { RadarChart } from 'recharts';
import { chartWrapper, IResourceChartProps } from '../ChartWrapper';

export { IResourceChartProps };

export const ResourceRadarChart = chartWrapper(RadarChart);
