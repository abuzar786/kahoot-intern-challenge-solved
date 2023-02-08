export interface Bonus {
  count: number;
  amount: number;
}

export interface ItemDefinition {
  id: string;
  name: string;
  value: number;
  bonus?: Bonus;
}

export type ItemsDefinition = Record<string, ItemDefinition>