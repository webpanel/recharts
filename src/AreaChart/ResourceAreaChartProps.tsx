import { AreaChartProps } from 'recharts';
import { ResourceCollection } from 'webpanel-data';

export interface IResourceAreaChartProps extends AreaChartProps {
  resourceCollection: ResourceCollection;
}
