import * as React from 'react';
import { AreaChartProps } from 'recharts';
import { ResourceCollection } from 'webpanel-data';
export interface ResourceAreaChartProps extends AreaChartProps {
    resourceCollection: ResourceCollection;
}
export declare class ResourceAreaChart extends React.Component<ResourceAreaChartProps> {
    render(): JSX.Element;
}
