import * as React from "react";

import { Spin } from 'antd';
import { observer } from "mobx-react";

export const chartWrapper = (ChartComponent: React.ComponentType) => {
  return observer((props: any) => {
    const {
      resourceCollection: {data, loading},
      children,
      ...restProps
    } = props;
    
    if (loading) {
      return <div style={{textAlign: "center", paddingTop: 32, paddingBottom: 32}}><Spin /></div>;
    }
  
    return (
      <ChartComponent data={data || []} {...restProps}>
        {children}
      </ChartComponent>
    );
  });
};
