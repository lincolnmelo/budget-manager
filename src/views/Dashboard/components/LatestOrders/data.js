import uuid from 'uuid/v1';

export default [
  {
    id: uuid(),
    ref: 'CDD1049',
    amount: 30.5,
    customer: {
      name: 'Natura'
    },
    createdAt: 1555016400000,
    status: 'Pendente'
  },
  {
    id: uuid(),
    ref: 'CDD1048',
    amount: 25.1,
    customer: {
      name: 'Ford'
    },
    createdAt: 1555016400000,
    status: 'Entregue'
  },
  {
    id: uuid(),
    ref: 'CDD1047',
    amount: 10.99,
    customer: {
      name: 'Toyota'
    },
    createdAt: 1554930000000,
    status: 'Recusado'
  },
  {
    id: uuid(),
    ref: 'CDD1046',
    amount: 96.43,
    customer: {
      name: 'Honda'
    },
    createdAt: 1554757200000,
    status: 'Pendente'
  },
  {
    id: uuid(),
    ref: 'CDD1045',
    amount: 32.54,
    customer: {
      name: 'Fiat'
    },
    createdAt: 1554670800000,
    status: 'Entregue'
  },
  {
    id: uuid(),
    ref: 'CDD1044',
    amount: 16.76,
    customer: {
      name: 'Novares'
    },
    createdAt: 1554670800000,
    status: 'Entregue'
  }
];
