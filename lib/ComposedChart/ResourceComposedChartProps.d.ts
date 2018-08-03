import { ComposedChartProps } from 'recharts';
import { ResourceCollection } from 'webpanel-data';
export interface IResourceComposedChartProps extends ComposedChartProps {
    resourceCollection: ResourceCollection;
}
