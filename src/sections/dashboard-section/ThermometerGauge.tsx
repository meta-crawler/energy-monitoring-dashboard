import React, { useEffect, useState } from 'react';
import Thermometer from 'react-thermometer-component';
import useResponsive from 'src/hooks/useResponsive';
import typography from 'src/theme/typography';

type IThermometerGaugeProps = {
  title: string;
  value: number;
  string: number;
  module: number;
  max?: number;
};

export default function ThermometerGauge({
  title,
  value,
  string,
  module,
  max,
}: IThermometerGaugeProps) {
  const [size, setSize] = useState(320);
  const isLarge = useResponsive('up', 'xxl');
  const isDesktop = useResponsive('between', 'md', 'xxl');
  const isMobile = useResponsive('down', 'md');

  useEffect(() => {
    if (isLarge) setSize(240);
    if (isDesktop) setSize(270);
    if (isMobile) setSize(200);
  }, [setSize, isLarge, isDesktop, isMobile]);

  return (
    <div className="flex flex-col items-center w-full gap-y-2">
      <Thermometer
        theme="light"
        value={`${value}`}
        format="°C"
        max={max ? `${max}` : '100'}
        size="medium"
        height={`${size}`}
        steps="5"
      />
      <p role="button" style={typography.overline}>{`${title} : [${string}-${module}]`}</p>
    </div>
  );
}
