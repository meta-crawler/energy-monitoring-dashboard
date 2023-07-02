import React, { useEffect, useState } from 'react';
import Thermometer from 'react-thermometer-component';
import useResponsive from 'src/hooks/useResponsive';

type IThermometerGaugeProps = {
  value: number;
  max?: number;
};

export default function ThermometerGauge({ value, max }: IThermometerGaugeProps) {
  const [size, setSize] = useState(320);
  const isLarge = useResponsive('up', 'xxl');
  const isDesktop = useResponsive('between', 'md', 'xxl');
  const isMobile = useResponsive('down', 'md');

  useEffect(() => {
    if (isLarge) setSize(250);
    if (isDesktop) setSize(320);
    if (isMobile) setSize(200);
  }, [setSize, isLarge, isDesktop, isMobile]);

  return (
    <Thermometer
      theme="light"
      value={`${value}`}
      format="°C"
      max={max ? `${max}` : '100'}
      size="medium"
      height={`${size}`}
      steps="5"
    />
  );
}
