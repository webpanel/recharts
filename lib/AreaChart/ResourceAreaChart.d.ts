/// <reference types="react" />
import { AreaChartProps } from "recharts";
import { ResourceCollection } from 'webpanel-data';
export interface ResourceAreaChartProps extends AreaChartProps {
    resourceCollection: ResourceCollection;
}
export declare const ResourceAreaChart: (props: any) => JSX.Element;
