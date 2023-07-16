import mock from 'src/_mock/mock';
import { getRandomSamplingTime, getRandomValue, getRoundedValue } from '../utils/random';

mock.onGet('/api/get-history-data').reply((req: any) => {
  const { startDate, endDate, period } = req.params;
  const samplingTimes = getRandomSamplingTime(startDate, endDate, period);
  const values = samplingTimes.map((_) => getRoundedValue(getRandomValue(30, 3), 1));

  return [
    200,
    {
      data: {
        values,
        times: samplingTimes,
      },
    },
  ];
});
