import React, { useState, useEffect } from 'react';
import {
  CircularGaugeComponent,
  AxesDirective,
  AxisDirective,
  PointersDirective,
  PointerDirective,
  RangeDirective,
  RangesDirective,
  AnnotationDirective,
  AnnotationsDirective,
  Inject,
  Annotations,
} from '@syncfusion/ej2-react-circulargauge';
import colors from 'src/theme/colors';
import { IGaugeOptions } from './constants';
import useResponsive from 'src/hooks/useResponsive';

type ICircularGaugeProps = {
  title: string;
  value: number;
  options: IGaugeOptions;
};

function CircularGauge({ title, value, options }: ICircularGaugeProps) {
  const { unit, border, breakpoints } = options;
  const meterTitle = `<div><span style="font-size: 16px;">${title}&nbsp;(${unit})</span></div>`;
  const meterValue = `<div><span style="font-size: 20px;">${value}&nbsp;${unit}</span></div>`;
  const min = breakpoints[0].start;
  const max = breakpoints[breakpoints.length - 1].end;

  const [size, setSize] = useState(320);
  const isLarge = useResponsive('up', 'xxl');
  const isDesktop = useResponsive('between', 'md', 'xxl');
  const isMobile = useResponsive('down', 'md');

  useEffect(() => {
    if (isLarge) setSize(320);
    if (isDesktop) setSize(360);
    if (isMobile) setSize(300);
  }, [setSize, isLarge, isDesktop, isMobile]);

  return (
    <div className="control-pane">
      <CircularGaugeComponent
        id={`${title}`}
        width={`${size}`}
        height={`${size}`}
        background="transparent"
      >
        <Inject services={[Annotations]} />
        <AxesDirective>
          <AxisDirective
            radius="100%"
            startAngle={230}
            endAngle={130}
            minimum={min}
            maximum={max}
            hideIntersectingLabel={true}
            lineStyle={{ width: 0, color: 'transparent' }}
            labelStyle={{
              font: {
                fontFamily: 'inherit',
              },
              offset: -1,
              autoAngle: true,
            }}
            majorTicks={{
              position: 'Inside',
              width: 2,
              height: 15,
              interval: 20,
              offset: border || 6,
            }}
            minorTicks={{
              position: 'Inside',
              width: 1,
              height: 8,
              interval: 2,
              offset: border || 6,
            }}
          >
            <PointersDirective>
              <PointerDirective
                value={value}
                radius="75%"
                pointerWidth={9}
                color={colors('grey.900')}
                animation={{ enable: true, duration: 500 }}
                cap={{
                  radius: 6,
                  color: colors('grey.900'),
                  border: { width: 0 },
                }}
                needleTail={{
                  length: '15%',
                  color: colors('grey.900'),
                }}
              />
            </PointersDirective>
            <RangesDirective>
              {breakpoints.map((breakpoint) => (
                <RangeDirective
                  key={breakpoint.start + breakpoint.end}
                  start={breakpoint.start}
                  end={breakpoint.end}
                  color={breakpoint.color}
                  startWidth={border || 6}
                  endWidth={border || 6}
                  roundedCornerRadius={0}
                />
              ))}
            </RangesDirective>
            <AnnotationsDirective>
              <AnnotationDirective content={meterTitle} angle={0} zIndex="1" radius="40%" />
              <AnnotationDirective content={meterValue} angle={180} zIndex="1" radius="50%" />
            </AnnotationsDirective>
          </AxisDirective>
        </AxesDirective>
      </CircularGaugeComponent>
    </div>
  );
}

export default CircularGauge;
