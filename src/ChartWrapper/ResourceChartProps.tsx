import { IResourceAreaChartProps } from '../AreaChart/ResourceAreaChartProps';
import { IResourceBarChartProps } from '../BarChart/ResourceBarChartProps';
import { IResourceComposedChartProps } from '../ComposedChart/ResourceComposedChartProps';
import { IResourceLineChartProps } from '../LineChart/ResourceLineChartProps';
import { IResourcePieChartProps } from '../PieChart/ResourcePieChartProps';
import { IResourceRadarChartProps } from '../RadarChart/ResourceRadarChartProps';
import { IResourceRadialBarChartProps } from '../RadialBarChart/ResourceRadialBarChartProps';
import { IResourceScatterChartProps } from '../ScatterChart/ResourceScatterChartProps';
import { IResourceTreemapProps } from '../Treemap/ResourceTreemapProps';

export type IResourceChartProps = IResourceAreaChartProps &
  IResourceBarChartProps &
  IResourceComposedChartProps &
  IResourceLineChartProps &
  IResourcePieChartProps &
  IResourceRadarChartProps &
  IResourceRadialBarChartProps &
  IResourceScatterChartProps &
  IResourceTreemapProps;
