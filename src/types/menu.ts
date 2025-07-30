import type { ReactElement } from 'react';

export interface NavItem {
  path: string;
  label: string;
  icon: ReactElement;
  description?: string;
}
