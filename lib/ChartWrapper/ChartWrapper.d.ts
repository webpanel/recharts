import * as React from 'react';
import { CategoricalChartWrapper } from 'recharts';
import { ResourceCollection } from 'webpanel-data';
export interface IResourceChartProps extends CategoricalChartWrapper {
    resourceCollection: ResourceCollection;
}
export declare const chartWrapper: (ChartComponent: React.ComponentType<CategoricalChartWrapper<import("recharts").LayoutType>>) => (props: IResourceChartProps) => JSX.Element;
