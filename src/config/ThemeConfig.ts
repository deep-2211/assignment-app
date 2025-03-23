/* eslint-disable @typescript-eslint/no-explicit-any */

declare module '@mui/material/styles' {
  interface Theme {
    appColors: {
      blue: {
        light: string;
        main: string;
        dark: string;
      };
      pink: string;
      teal: string;
    };
  }
  interface ThemeOptions {
    appColors?: {
      blue?: {
        light?: string;
        main?: string;
        dark?: string;
      };
      pink?: string;
      teal?: string;
    };
  }
}

export const themeConfig = {
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiAccordion: {
      defaultProps: {
        disableGutters: true,
        square: true,
        elevation: 0,
      },
    },
  },
  typography: {
    fontSize: 13,
  },
  appColors: {
    blue: {
      light: '#1e3fcd',
      main: '#1333bb',
      dark: '#1532ad',
    },
    pink: '#db3655',
    teal: '#52bca6',
  },
};
