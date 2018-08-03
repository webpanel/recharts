import { chartWrapper } from "../ChartWrapper";
import { LineChart, LineChartProps } from "recharts";
import { ResourceCollection } from 'webpanel-data';

export interface ResourceLineChartProps extends LineChartProps {
    resourceCollection: ResourceCollection;
}

export const ResourceLineChart = chartWrapper(LineChart);
