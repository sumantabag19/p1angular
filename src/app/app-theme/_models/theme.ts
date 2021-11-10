export interface Theme {
  name: string;
  properties: any;
}

export const light: Theme = {
  name: 'light',
  properties: {
    '--primary': '#ea9531',
    '--secondary': '#cdcdcd',
    '--tertiary': '#212121',
    '--quaternary': '#fff',
    '--background': '#f1f4f6',
    '--shadow-border': '#00000017',
    '--shadow': '0 0rem 1rem rgba(0, 0, 0, 0.09) !important',

    '--toast-success': '#4caf50',
    '--toast-error': '#f44336',
    '--toast-info': '#2196f3',
    '--toast-warning': '#ff9800',
  },
};

export const dark: Theme = {
  name: 'dark',
  properties: {
    '--primary': '#08090a',
    '--secondary': '#41474d',
    '--tertiary': '#797c80',
    '--quaternary': '#f4faff',
    '--background': '#41474d',
    '--shadow-border': '#00000017',
    '--shadow': '0 1px 3px 0 rgba(92, 125, 153, 0.5) !important',

    '--toast-success': '#4caf50',
    '--toast-error': '#f44336',
    '--toast-info': '#2196f3',
    '--toast-warning': '#ff9800',
  },
};
