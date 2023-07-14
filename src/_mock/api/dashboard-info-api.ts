import mock from '../mock';
import { getRoundedValue, getRandomValue, getLinearRandomValue } from '../utils/random';

mock.onGet('/api/get-gauges-info').reply((req: any) => {
  const chargingStatus = Math.random() < 0.9 ? 1 : 0;
  const soc = getRoundedValue(getLinearRandomValue(90, 95), 0);
  const voltage = getRoundedValue(getLinearRandomValue(520, 540));
  const current = getRoundedValue(getLinearRandomValue(33, 37));

  const maxTV = getRoundedValue(getRandomValue(40, 20));
  const maxTS = Math.round(getRandomValue(2, 1));
  const maxTM = Math.round(getRandomValue(10, 3));

  const minTV = getRoundedValue(getRandomValue(30, 15));
  const minTS = Math.round(getRandomValue(2, 1));
  const minTM = Math.round(getRandomValue(10, 3));

  return [
    200,
    {
      data: {
        chargingStatus,
        soc,
        voltage,
        current,
        maxT: {
          value: maxTV,
          string: maxTS,
          module: maxTM,
        },
        minT: {
          value: minTV,
          string: minTS,
          module: minTM,
        },
      },
    },
  ];
});

mock.onGet('/api/get-alert-list').reply((req: any) => {
  const temperature = Math.round(getRandomValue(1, 2));
  const overCharge = Math.round(getRandomValue(1, 2));
  const overDisCharge = Math.round(getRandomValue(1, 2));

  return [
    200,
    {
      data: {
        temperature,
        overCharge,
        overDisCharge,
      },
    },
  ];
});
