import * as React from 'react';
import { LineChart, LineChartProps } from 'recharts';
import { observer } from 'mobx-react';
import { ResourceCollection } from 'webpanel-data';

export interface ResourceLineChartProps extends LineChartProps {
    resourceCollection: ResourceCollection;
}

@observer
export class ResourceLineChart extends React.Component<ResourceLineChartProps> {
    render(){
        const {
            resourceCollection,
            children,
            ...restProps
        } = this.props;

        return (
            <LineChart {...restProps} data={resourceCollection.data || []}>
                {children}
            </LineChart>
        );
    }
}
