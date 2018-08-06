import * as React from 'react';

import { Spin } from 'antd';
import { observer } from 'mobx-react';

import { CategoricalChartWrapper } from 'recharts';
import { IResourceChartProps } from './ResourceChartProps';

export const chartWrapper = (
  ChartComponent: React.ComponentType<
    CategoricalChartWrapper<'centric' | 'horizontal' | 'radial' | 'vertical'>
  >
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
