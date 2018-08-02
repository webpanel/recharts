import * as React from 'react';
import { LineChart, LineChartProps } from 'recharts';
import { observer } from 'mobx-react';
import { ResourceCollection } from 'webpanel-data';
import { Spin } from 'antd';

export interface ResourceLineChartProps extends LineChartProps {
    resourceCollection: ResourceCollection;
}

@observer
export class ResourceLineChart extends React.Component<ResourceLineChartProps> {
    render(){
        const {
            resourceCollection: {data, loading},
            children,
            ...restProps
        } = this.props;
        
        if (loading) {
            return <div style={{textAlign: "center", paddingTop: 32, paddingBottom: 32}}><Spin /></div>;
        }

        return (
            <LineChart data={data || []} {...restProps}>
                {children}
            </LineChart>
        );
    }
}
