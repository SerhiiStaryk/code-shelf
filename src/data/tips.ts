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

  {
    title: 'Navigation State Controller Using React Context and useReducer',
    category: 'Type Script',
    language: 'typescript',
    description: `This component implements a navigation state controller using React Context and useReducer. It manages a single
 boolean state (collapsed) and provides three actions—open, close, and toggle—to update it. The state (useNavData) and
 the API (useNavApi) are exposed through separate contexts, allowing any child component to read or modify the
 navigation collapsed state without prop-drilling.`,
    code: `import React, { useContext, useMemo, useReducer } from 'react';

type State = { collapsed: boolean };

const defaultState: State = { collapsed: false };

type Action = { type: 'open' | 'close' | 'toggle' };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'open':
      return { ...state, collapsed: false };
    case 'close':
      return { ...state, collapsed: true };
    case 'toggle':
      return { ...state, collapsed: !state.collapsed };
  }
};

const ContextData = React.createContext({
  collapsed: false,
});

const ContextApi = React.createContext({
  open: () => {},
  close: () => {},
  toggle: () => {},
});

export const useNavData = () => useContext(ContextData);
export const useNavApi = () => useContext(ContextApi);

const NavController = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const data = useMemo(
    () => ({
      collapsed: state.collapsed,
    }),
    [state]
  );

  const api = useMemo(
    () => ({
      open: () => dispatch({ type: 'open' }),
      close: () => dispatch({ type: 'close' }),
      toggle: () => dispatch({ type: 'toggle' }),
    }),
    []
  );

  return (
    <ContextData.Provider value={data}>
      <ContextApi.Provider value={api}>{children}</ContextApi.Provider>
    </ContextData.Provider>
  );
};

export default NavController;`,
  },
];
