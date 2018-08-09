import { RadialBarChartProps } from 'recharts';
import { ResourceCollection } from 'webpanel-data';
export interface IResourceRadialBarChartProps extends RadialBarChartProps {
    resourceCollection: ResourceCollection;
}
