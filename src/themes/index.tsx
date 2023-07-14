import {extendTheme} from 'native-base';

const Themes = extendTheme({
  colors: {
    gray: {
      300: '#8D8D99',
    },
    blue: {
      500: '#339CFF',
      800: '#0B3B60',
    },
    white: '#FFFFFF',
    black: '#000000',
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
  },
});

export default Themes;