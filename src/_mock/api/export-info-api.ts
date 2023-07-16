import mock from 'src/_mock/mock';
import { getRoundedValue, getRandomSamplingTime, getLinearRandomValue } from '../utils/random';

const getExportData = (string: number, module: number, time: string) => {
  const percentAlarm = Math.round(Math.random() * 100);
  const percentCharge = Math.round(Math.random() * 100);
  const percentOverT = Math.round(Math.random() * 100);
  const percentOverCharge = Math.round(Math.random() * 100);
  const percentOverDischarge = Math.round(Math.random() * 100);
  const voltage = getRoundedValue(getLinearRandomValue(520, 540));
  const current = getRoundedValue(getLinearRandomValue(33, 37));

  return {
    string,
    module,
    time,
    voltage,
    current,
    alarm: percentAlarm < 90 ? 0 : percentAlarm < 99 ? 1 : 2,
    chargeStatus: percentCharge < 90 ? 1 : 0,
    overT: percentOverT < 90 ? 0 : percentOverT < 99 ? 1 : 2,
    overCharge: percentOverCharge < 90 ? 0 : percentOverCharge < 99 ? 1 : 2,
    overDischarge: percentOverDischarge < 90 ? 0 : percentOverDischarge < 99 ? 1 : 2,
  };
};

mock.onGet('/api/get-export-infos').reply((req: any) => {
  const { string, module, startDate, endDate, period } = req.params;
  const samplingTimes = getRandomSamplingTime(startDate, endDate, period);
  const data = samplingTimes.map((time) => getExportData(Number(string), Number(module), time));

  return [
    200,
    {
      data,
    },
  ];
});
