import { PieChartProps } from 'recharts';
import { ResourceCollection } from 'webpanel-data';

export interface IResourcePieChartProps extends PieChartProps {
  resourceCollection: ResourceCollection;
  render?(data: any): React.ReactNode | React.ReactNodeArray;
}
