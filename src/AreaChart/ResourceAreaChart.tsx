import * as React from 'react';
import { AreaChart, AreaChartProps } from 'recharts';
import { observer } from 'mobx-react';
import { ResourceCollection } from 'webpanel-data';
import { Spin } from 'antd';

export interface ResourceAreaChartProps extends AreaChartProps {
    resourceCollection: ResourceCollection;
}

@observer
export class ResourceAreaChart extends React.Component<ResourceAreaChartProps> {
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
            <AreaChart data={data || []} {...restProps}>
                {children}
            </AreaChart>
        );
    }
}
