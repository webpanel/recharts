import * as React from 'react';
import { LineChart, LineChartProps } from 'recharts';

export interface ResourceLineChartProps extends LineChartProps {
    resourceCollection: any;
}

class ResourceLineChart extends React.Component<ResourceLineChartProps> {
    public render(){
        const {
            resourceCollection,
            children,
            ...restProps,
        } = this.props;
        
        return (
            <LineChart {...restProps} data={resourceCollection}>
                {children}
            </LineChart>
        );
    }
}

export { ResourceLineChart };