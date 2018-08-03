import * as React from 'react';

import { Spin } from 'antd';
import { observer } from 'mobx-react';

import { CategoricalChartWrapper } from 'recharts';
import { ResourceCollection } from 'webpanel-data';

export interface IResourceChartProps extends CategoricalChartWrapper {
  resourceCollection: ResourceCollection;
}

export const chartWrapper = (
  ChartComponent: React.ComponentType<CategoricalChartWrapper>
) => {
  return observer((props: IResourceChartProps) => {
    const {
      resourceCollection: { data, loading },
      children,
      ...restProps
    } = props;

    if (loading) {
      return (
        <div style={{ textAlign: 'center', paddingTop: 32, paddingBottom: 32 }}>
          <Spin />
        </div>
      );
    }

    return (
      <ChartComponent data={data || []} {...restProps}>
        {children}
      </ChartComponent>
    );
  });
};
