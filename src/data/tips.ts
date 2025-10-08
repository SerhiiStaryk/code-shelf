export const tips = [
  {
    title: 'String literal union pattern',
    description: 'Creating a discriminated string union type from a readonly constant object.',
    code: `export const OrderStatus = {
 Open: 'Open',
 Picking: 'Picking',
 Submitted: 'Submitted',
 Created: 'Created',
} as const;

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]`,
    category: 'Type Script',
    language: 'typescript',
  },
];
