import * as React from 'react';
import { CategoricalChartWrapper } from 'recharts';
import { IResourceChartProps } from './ResourceChartProps';
export declare const chartWrapper: (ChartComponent: React.ComponentType<CategoricalChartWrapper<"horizontal" | "vertical" | "centric" | "radial">>) => (props: IResourceChartProps) => JSX.Element;
