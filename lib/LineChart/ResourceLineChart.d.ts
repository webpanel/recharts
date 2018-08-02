import * as React from 'react';
import { LineChartProps } from 'recharts';
import { ResourceCollection } from 'webpanel-data';
export interface ResourceLineChartProps extends LineChartProps {
    resourceCollection: ResourceCollection;
}
export declare class ResourceLineChart extends React.Component<ResourceLineChartProps> {
    render(): JSX.Element;
}
