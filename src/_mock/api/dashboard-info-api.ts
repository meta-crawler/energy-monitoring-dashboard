import mock from 'src/_mock/mock';
import { format, subHours } from 'date-fns';

const getRandomValue = (m: number, sigma: number) => m + sigma * Math.random();

const getRoundedValue = (x: number, drop: number | null = null) =>
  drop !== null ? Number(x.toFixed(drop)) : Number(x.toFixed(2));

mock.onGet('/api/get-gauges-info').reply((req: any) => {
  const chargingStatus = Math.round(getRandomValue(5, 5)) > 9;
  const soc = getRoundedValue(getRandomValue(40, 30), 0);
  const voltage = getRoundedValue(getRandomValue(240, 20));
  const current = getRoundedValue(getRandomValue(30, 20));

  const maxTV = getRoundedValue(getRandomValue(40, 20), 1);
  const maxTS = Math.round(getRandomValue(2, 1));
  const maxTM = Math.round(getRandomValue(10, 4));

  const minTV = getRoundedValue(getRandomValue(30, 15), 1);
  const minTS = Math.round(getRandomValue(2, 1));
  const minTM = Math.round(getRandomValue(10, 4));

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

mock.onGet('/api/get-alarm-list').reply((req: any) => {
  const types = ['Over Temperature', 'Over Charge', 'Over Discharge', 'RS485 Fail'];
  const levels = ['Info', 'Warning'];

  const alarms = [...Array(5)].map((_, index) => {
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
