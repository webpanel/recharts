/// <reference types="react" />
import { LineChartProps } from "recharts";
import { ResourceCollection } from 'webpanel-data';
export interface ResourceLineChartProps extends LineChartProps {
    resourceCollection: ResourceCollection;
}
export declare const ResourceLineChart: (props: any) => JSX.Element;
