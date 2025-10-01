import type { TypographyProps } from '@/types/ui';

const shared = {
  button:
    'px-6 py-4 rounded-lg no-underline block transition-colors duration-200 text-center cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2',
  text: 'font-medium flex gap-2 items-center text-center justify-center',
};

export const BUTTON_VARIANTS: Record<
  string,
  { button: string; typography: TypographyProps['variant']; text: string }
> = {
  primary: {
    button: `${shared.button} bg-primary-500 hover:bg-primary-400`,
    typography: 'p1-contrast',
    text: `${shared.text}`,
  },
  secondary: {
    button: `${shared.button} bg-fill-300-contrast hover:bg-fill-100-contrast`,
    typography: 'p1',
    text: `${shared.text} text-text-500-contrast`,
  },
  'primary-contrast': {
    button: `${shared.button} bg-fill-100 hover:bg-fill-300`,
    typography: 'p1',
    text: `${shared.text} text-text-600`,
  },
};
