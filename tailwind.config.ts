// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '65': '4.0625rem',
        '144': '1.44rem',
        '3388': '3.388rem',
        'about-us-1': '2.5rem',
        'about-us-subtitle': '1.375rem',
        'super-title': '3.375rem',
        'team-member-name': '2rem'
      },
      textRendering: {
        'optimizeSharpness': 'optimizeSpeed',
      },
      width: {
        'black-dash': '8.75rem',
      }
    }
  },
  plugins: [],
};

export default config;