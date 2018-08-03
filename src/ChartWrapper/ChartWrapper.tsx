import * as React from 'react';

import { Spin } from 'antd';
import { observer } from 'mobx-react';

import { CategoricalChartWrapper } from 'recharts';

import { IResourceAreaChartProps } from '../AreaChart/ResourceAreaChartProps';
import { IResourceBarChartProps } from '../BarChart/ResourceBarChartProps';
import { IResourceComposedChartProps } from '../ComposedChart/ResourceComposedChartProps';
import { IResourceLineChartProps } from '../LineChart/ResourceLineChartProps';
import { IResourceRadarChartProps } from '../RadarChart/ResourceRadarChartProps';

export type IResourceChartProps = IResourceAreaChartProps &
  IResourceBarChartProps &
  IResourceComposedChartProps &
  IResourceLineChartProps &
  IResourceRadarChartProps;

export const chartWrapper = (
  ChartComponent: React.ComponentType<
    CategoricalChartWrapper<'centric' | 'horizontal' | 'vertical'>
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
