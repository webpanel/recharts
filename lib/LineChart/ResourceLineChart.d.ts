import * as React from "react";
import { LineChartProps } from "recharts";
export interface ResourceLineChartProps extends LineChartProps {
    resourceCollection: any;
}
declare class ResourceLineChart extends React.Component<ResourceLineChartProps> {
    render(): JSX.Element;
}
export { ResourceLineChart };
