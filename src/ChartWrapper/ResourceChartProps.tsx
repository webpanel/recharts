import { IResourceAreaChartProps } from '../AreaChart/ResourceAreaChartProps';
import { IResourceBarChartProps } from '../BarChart/ResourceBarChartProps';
import { IResourceComposedChartProps } from '../ComposedChart/ResourceComposedChartProps';
import { IResourceLineChartProps } from '../LineChart/ResourceLineChartProps';
import { IResourceRadarChartProps } from '../RadarChart/ResourceRadarChartProps';
import { IResourceRadialBarChartProps } from '../RadialBarChart/ResourceRadialBarChartProps';

export type IResourceChartProps = IResourceAreaChartProps &
  IResourceBarChartProps &
  IResourceComposedChartProps &
  IResourceLineChartProps &
  IResourceRadarChartProps &
  IResourceRadialBarChartProps;
