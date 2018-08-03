import { chartWrapper } from "../ChartWrapper";
import { BarChart, BarChartProps } from "recharts";
import { ResourceCollection } from 'webpanel-data';

export interface ResourceBarChartProps extends BarChartProps {
    resourceCollection: ResourceCollection;
}

export const ResourceBarChart = chartWrapper(BarChart);
