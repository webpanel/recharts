import { LineChartProps } from 'recharts';
import { ResourceCollection } from 'webpanel-data';
export interface IResourceLineChartProps extends LineChartProps {
    resourceCollection: ResourceCollection;
}
