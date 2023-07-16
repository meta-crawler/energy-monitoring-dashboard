import React, { useEffect, useState } from 'react';
import CustomECharts from 'src/components/custom-echarts';
import type { EChartsOption } from 'echarts';
import { ICircularIndicatorGaugeOptions } from './constants';
import useResponsive from 'src/hooks/useResponsive';

type ICircularIndicatorGaugeProps = {
  value: number;
  options: ICircularIndicatorGaugeOptions;
};

export default function CircularIndicatorGauge({ value, options }: ICircularIndicatorGaugeProps) {
  const {
    breakpoints,
    title,
    formatter,
    border = 16,
    labelInner = 10,
    labelSize = 16,
    valueAnimation = false,
    min,
    max,
    majorTicks,
    minorTicks,
  } = options;

  const option: EChartsOption = {
    series: [
      {
        type: 'gauge',
        min: min,
        max: max,
        splitNumber: majorTicks,
        axisLine: {
          lineStyle: {
            width: border,
            color: breakpoints,
          },
        },
        pointer: {
          length: '75%',
          itemStyle: {
            color: 'auto',
          },
        },
        axisTick: {
          splitNumber: minorTicks,
          distance: -border,
          length: border / 2,
          lineStyle: {
            color: '#fff',
            width: 1,
          },
        },
        splitLine: {
          distance: -border,
          length: border,
          lineStyle: {
            color: '#fff',
            width: 2,
          },
        },
        axisLabel: {
          color: 'inherit',
          distance: border + labelInner,
          fontSize: labelSize,
        },
        detail: {
          valueAnimation: valueAnimation,
          formatter: formatter,
          color: 'inherit',
        },
        data: [
          {
            name: title,
            value: value,
          },
        ],
      },
    ],
  };

  const [size, setSize] = useState(420);
  const isLarge = useResponsive('up', 'xxl');
  const isDesktop = useResponsive('between', 'md', 'xxl');
  const isMobile = useResponsive('down', 'md');

  useEffect(() => {
    if (isLarge) setSize(400);
    if (isDesktop) setSize(450);
    if (isMobile) setSize(360);
  }, [setSize, isLarge, isDesktop, isMobile]);

  return (
    <div className="-m-10">
      <CustomECharts option={option} style={{ width: `${size}px`, height: `${size}px` }} />
    </div>
  );
}
