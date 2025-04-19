import { ReactNode } from 'react';

declare module '@material-tailwind/react' {
  export interface TypographyProps {
    variant?: string;
    color?: string;
    className?: string;
    children: ReactNode;
  }

  export interface ButtonProps {
    color?: string;
    className?: string;
    size?: string;
    children: ReactNode;
  }

  export interface ThemeProviderProps {
    value?: Record<string, any>;
    children?: ReactNode;
  }

  export const ThemeProvider: React.FC<ThemeProviderProps>;
}

declare module '@heroicons/react/24/solid' {
  export interface IconProps {
    className?: string;
  }
} 