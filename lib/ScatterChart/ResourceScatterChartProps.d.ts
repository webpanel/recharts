/// <reference types="react" />
import { ScatterChartProps } from 'recharts';
import { ResourceCollection } from 'webpanel-data';
export interface IResourceScatterChartProps extends ScatterChartProps {
    resourceCollection: ResourceCollection;
    render?(data: any): React.ReactNode | React.ReactNodeArray;
}
