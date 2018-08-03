import * as React from 'react';
import { CategoricalChartWrapper } from 'recharts';
import { IResourceAreaChartProps } from '../AreaChart/ResourceAreaChartProps';
import { IResourceBarChartProps } from '../BarChart/ResourceBarChartProps';
import { IResourceComposedChartProps } from '../ComposedChart/ResourceComposedChartProps';
import { IResourceLineChartProps } from '../LineChart/ResourceLineChartProps';
import { IResourceRadarChartProps } from '../RadarChart/ResourceRadarChartProps';
export declare type IResourceChartProps = IResourceAreaChartProps & IResourceBarChartProps & IResourceComposedChartProps & IResourceLineChartProps & IResourceRadarChartProps;
export declare const chartWrapper: (ChartComponent: React.ComponentType<CategoricalChartWrapper<"horizontal" | "vertical" | "centric">>) => (props: IResourceChartProps) => JSX.Element;
