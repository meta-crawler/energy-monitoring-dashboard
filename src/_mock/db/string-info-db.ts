export default {
  '1': {
    '1': [
      {
        maxT: 29.47,
        minT: 28.69,
        voltage: 533.64,
        current: 7.17,
      },
      {
        soc: 98.19,
        dod: 3.29,
        soh: 27.77,
      },
    ],
    '2': [
      {
        maxT: 29.38,
        minT: 26.76,
        voltage: 536.89,
        current: 7.3,
      },
      {
        soc: 91.88,
        dod: 2.95,
        soh: 17.54,
      },
    ],
    '3': [
      {
        maxT: 26.76,
        minT: 28.29,
        voltage: 533.24,
        current: 8.9,
      },
      {
        soc: 91.33,
        dod: 0.38,
        soh: 20.94,
      },
    ],
  },
  '2': {
    '1': [
      {
        maxT: 29.11,
        minT: 28.36,
        voltage: 539.99,
        current: 9.08,
      },
      {
        soc: 90.88,
        dod: 4.17,
        soh: 16.65,
      },
    ],
    '2': [
      {
        maxT: 29.51,
        minT: 24.3,
        voltage: 533.67,
        current: 9.22,
      },
      {
        soc: 93.57,
        dod: 4.75,
        soh: 28.78,
      },
    ],
    '3': [
      {
        maxT: 28.79,
        minT: 27.41,
        voltage: 538.59,
        current: 7.1,
      },
      {
        soc: 95.02,
        dod: 2.27,
        soh: 25.0,
      },
    ],
  },
  '3': {
    '1': [
      {
        maxT: 29.93,
        minT: 26.34,
        voltage: 530.53,
        current: 8.1,
      },
      {
        soc: 96.33,
        dod: 2.34,
        soh: 14.41,
      },
    ],
    '2': [
      {
        maxT: 27.29,
        minT: 25.83,
        voltage: 536.27,
        current: 7.64,
      },
      {
        soc: 93.37,
        dod: 1.39,
        soh: 25.1,
      },
    ],
    '3': [
      {
        maxT: 26.88,
        minT: 28.99,
        voltage: 530.06,
        current: 9.15,
      },
      {
        soc: 97.26,
        dod: 2.26,
        soh: 23.36,
      },
    ],
  },
};

export const stringFields = [
  {
    maxT: 'Max T(℃)',
    minT: 'Min T(℃)',
    voltage: 'Voltage(V)',
    current: 'Current(A)',
  },
  {
    soc: 'SoC(%)',
    dod: 'DoD(%)',
    soh: 'SoH(%)',
  },
];
