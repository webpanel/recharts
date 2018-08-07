import { TreemapProps } from 'recharts';
import { ResourceCollection } from 'webpanel-data';

export interface IResourceTreemapProps extends TreemapProps {
  resourceCollection: ResourceCollection;
}
