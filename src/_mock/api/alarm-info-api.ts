import mock from '../mock';
import { format, subHours } from 'date-fns';
import { getRandomValue, getRoundedValue } from '../utils/random';

mock.onGet('/api/get-alarm-list').reply((req: any) => {
  const { total, page, limit } = req.params;
  const length = total ? total : 10;

  const types = ['Over Temperature', 'Over Charge', 'Over Discharge', 'RS485 Fail'];
  const levels = ['Normal', 'Warning', 'Abnormal'];

  const alarms = [...Array(length)].map((_, index) => {
    const typeId = Math.round(getRandomValue(2, 2)) % 4;
    const percent = Math.round(Math.random() * 100);
    const levelId = percent < 90 ? 0 : percent < 99 ? 1 : 2;
    const status = Math.round(Math.random() * 100) < 90 ? 1 : 0;

    const string = (Math.round(getRandomValue(2, 2)) % 3) + 1;
    const module = (Math.round(getRandomValue(10, 10)) % 20) + (string - 1) * 20 + 1;
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

    const target = () => {
      switch (typeId) {
        case 0:
          return {
            system: 'PCS-M300',
            string,
            module,
          };
        case 1:
          return {
            system: 'PCS-M300',
            string,
            module,
            cell,
          };
        case 2:
          return {
            system: 'PCS-M300',
            string,
            module,
            cell,
          };
        case 3:
          return {
            system: 'PCS-M300',
            string,
            module,
          };
      }
    };

    return {
      time: format(subHours(new Date(), index), 'yyyy-MM-dd HH:mm:ss'),
      type: types[typeId],
      level: levels[levelId],
      message: message(),
      status,
      target: target(),
    };
  });

  if (!alarms.some((alarm) => alarm.type === types[0] && alarm.level === levels[1])) {
    const randomId = Math.round(Math.random() * total);
    alarms[randomId].type = types[0];
    alarms[randomId].level = levels[1];
  }

  return [
    200,
    {
      data: alarms,
    },
  ];
});
