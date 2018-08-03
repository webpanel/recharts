import { BarChartProps } from 'recharts';
import { ResourceCollection } from 'webpanel-data';
export interface IResourceBarChartProps extends BarChartProps {
    resourceCollection: ResourceCollection;
}
