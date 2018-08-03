/// <reference types="react" />
import { BarChartProps } from "recharts";
import { ResourceCollection } from 'webpanel-data';
export interface ResourceBarChartProps extends BarChartProps {
    resourceCollection: ResourceCollection;
}
export declare const ResourceBarChart: (props: any) => JSX.Element;
