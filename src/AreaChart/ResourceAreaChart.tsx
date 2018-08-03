import { chartWrapper } from "../ChartWrapper";
import { AreaChart, AreaChartProps } from "recharts";
import { ResourceCollection } from 'webpanel-data';

export interface ResourceAreaChartProps extends AreaChartProps {
    resourceCollection: ResourceCollection;
}

export const ResourceAreaChart = chartWrapper(AreaChart);
