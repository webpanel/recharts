import { RadarChartProps } from 'recharts';
import { ResourceCollection } from 'webpanel-data';
export interface IResourceRadarChartProps extends RadarChartProps {
    resourceCollection: ResourceCollection;
}
