import { ItemsDefinition } from 'types';

export const drawerWidth = 250;

export const items: ItemsDefinition = {
  a: {
    id: 'a',
    name: 'A',
    value: 50,
    bonus: {
      amount: 50,
      count: 3,
    },
  },
  b: {
    id: 'b',
    name: 'B',
    value: 30,
    bonus: {
      amount: 30,
      count: 2,
    },
  },
  c: {
    id: 'c',
    name: 'C',
    value: 20,
  },
  d: {
    id: 'd',
    name: 'D',
    value: 15,
  },
};