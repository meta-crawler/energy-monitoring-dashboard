import React, { useEffect, useState } from 'react';
import { CustomECharts } from 'src/components';
import type { EChartsOption } from 'echarts';
import useResponsive from 'src/hooks/useResponsive';

type ILineChartProps = {
  title?: string;
  xAxisData: string[];
  seriesName: string;
  seriesData: number[];
  yAxisFormatter: string;
};

export default function LineChart({
  title,
  xAxisData,
  yAxisFormatter,
  seriesData,
  seriesName,
}: ILineChartProps) {
  const min = Math.min(...seriesData);
  const max = Math.max(...seriesData);

  const [chartHeight, setChartHeight] = useState(600);
  const [legendSize, setLegendSize] = useState(24);

  const isDesktop = useResponsive('up', 'xl');
  const isTablet = useResponsive('between', 'md', 'xl');
  const isMobile = useResponsive('down', 'md');

  useEffect(() => {
    if (isDesktop) {
      setChartHeight(600);
      setLegendSize(24);
    } else if (isTablet) {
      setChartHeight(540);
      setLegendSize(20);
    } else {
      setChartHeight(400);
      setLegendSize(15);
    }
  }, [isDesktop, isTablet, isMobile]);

  const option: EChartsOption = {
    title: {
      text: title,
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      show: true,
      textStyle: {
        fontSize: legendSize,
        fontWeight: 'bold',
      },
    },
    toolbox: {
      show: !isMobile,
      orient: 'horizontal',
      feature: {
        dataZoom: {
          yAxisIndex: 'none',
        },
        dataView: {
          show: true,
          readOnly: true,
        },
        restore: {
          show: false,
        },
        saveAsImage: {},
      },
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: xAxisData,
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: yAxisFormatter,
      },
      axisLine: {
        onZero: false,
      },
      min: min - 1,
      max: max + 1,
    },
    series: [
      {
        name: seriesName,
        type: 'line',
        data: seriesData,
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' },
          ],
        },
        markLine: {
          data: [{ type: 'average', name: 'Avg' }],
        },
      },
    ],
  };

  return (
    <>
      <CustomECharts option={option} style={{ height: `${chartHeight}px` }} />
    </>
  );
}
