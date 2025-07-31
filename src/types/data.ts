import type { ReactElement } from 'react';

export interface Feature {
  path: string;
  title: string;
  icon: ReactElement;
  description: string;
}

export interface CodeExample {
  code: string;
  title: string;
  source?: string;
  language: string;
  description: string;
}
