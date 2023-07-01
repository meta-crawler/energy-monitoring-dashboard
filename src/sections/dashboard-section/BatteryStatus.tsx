import React from 'react';
import BatteryGauge from 'react-battery-gauge';
import typography from 'src/theme/typography';
import { ChargingStatus } from 'src/lib/constants/status';
import useResponsive from 'src/hooks/useResponsive';

type IBatteryStatusProps = {
  soc: number;
  chargingStatus: boolean;
};

export default function BatteryStatus({ soc = 0, chargingStatus = false }: IBatteryStatusProps) {
  const isMobile = useResponsive('down', 'md');
  const charged = soc > 100 ? 100 : soc < 0 ? 0 : soc;

  return (
    <div className="flex flex-row items-center">
      <div className="flex flex-row -ml-10">
        <div className="flex-1">
          <BatteryGauge
            value={charged}
            size={200}
            orientation="vertical"
            charging={chargingStatus}
          />
        </div>
        <div className="flex flex-col justify-between -ml-6 pt-4 pb-2 ">
          <div>
            <p className="text-text-secondary" style={isMobile ? typography.h5 : typography.h3}>
              SoC
            </p>
            <p className="text-text-primary" style={typography.h2}>
              {charged}%
            </p>
          </div>
          <div>
            <p className="text-text-secondary" style={isMobile ? typography.h5 : typography.h3}>
              Battery Status
            </p>
            <p
              className={`px-3 py-1 mt-2 uppercase rounded-full text-white text-center ${
                chargingStatus ? 'bg-success-main' : 'bg-error-main'
              }`}
              style={isMobile ? typography.body2 : typography.h6}
            >
              {chargingStatus ? ChargingStatus.CHARGING : ChargingStatus.DISCHARGING}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
