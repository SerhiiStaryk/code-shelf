export const tips = [
  {
    title: 'String literal union pattern',
    category: 'Type Script',
    language: 'typescript',
    description: 'Creating a discriminated string union type from a readonly constant object.',
    code: `export const OrderStatus = {
 Open: 'Open',
 Picking: 'Picking',
 Submitted: 'Submitted',
 Created: 'Created',
} as const;

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]`,
  },

  {
    title: 'Responsive Image Styling',
    category: 'CSS',
    language: 'css',
    description: `This CSS snippet ensures that images scale proportionally within their container. 
      The max-width: 100% property prevents images from exceeding the container's width, 
      while height: auto maintains the original aspect ratio.`,
    code: `img { 
 max-width: 100%; 
 height: auto 
}`,
  },

  {
    title: 'Global Box-Sizing Reset',
    category: 'CSS',
    language: 'css',
    description: `his CSS snippet sets box-sizing: border-box globally, ensuring that padding and borders are included 
within an element's total width and height. The universal selector * and its pseudo-elements *:before and *:after 
inherit this behavior, which simplifies layout calculations and prevents unexpected sizing issues.`,
    code: `html {
 box-sizing: border-box; 
}

*,
*:before,
*:after {
 box-sizing: inherit; 
}`,
  },
];
