import mock from '../mock';
import { format, subHours } from 'date-fns';
import { getRandomValue, getRoundedValue } from '../utils/random';

mock.onGet('/api/get-alarm-list').reply((req: any) => {
  const { total, page, limit } = req.params;
  const length = total ? total : 5;

  const types = ['Over Temperature', 'Over Charge', 'Over Discharge', 'RS485 Fail'];
  const levels = ['Info', 'Warning'];

  const alarms = [...Array(length)].map((_, index) => {
    const typeId = Math.round(getRandomValue(2, 2)) % 4;
    const levelId = Math.round(getRandomValue(1, 1)) % 2;
    const messageId = Math.round(getRandomValue(4440, 10));
    const status = Math.round(getRandomValue(1, 1)) % 2;

    const string = Math.round(getRandomValue(2, 1));
    const module = Math.round(getRandomValue(10, 4));
    const cell = Math.round(getRandomValue(30, 10));

    const alertTemperature = getRoundedValue(getRandomValue(70, 5), 1);
    const alertOverCharge = getRoundedValue(getRandomValue(3.8, 0.5), 2);
    const alertOverDisCharge = getRoundedValue(getRandomValue(2.25, 0.25), 2);

    const message = () => {
      switch (typeId) {
        case 0:
          return `String${string}-Module${module} (Temperature : ${alertTemperature})`;
        case 1:
          return `String${string}-Module${module}-Cell${cell} (Voltage : ${alertOverCharge})`;
        case 2:
          return `String${string}-Module${module}-Cell${cell} (Voltage : ${alertOverDisCharge})`;
        case 3:
          return `String${string}-Module${module}`;
      }
    };

    return {
      time: format(subHours(new Date(), index), 'yyyy-MM-dd HH:mm:ss'),
      type: types[typeId],
      level: levels[levelId],
      message: message(),
      status,
      link: '',
    };
  });
  return [
    200,
    {
      data: alarms,
    },
  ];
});
