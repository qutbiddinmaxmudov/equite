import * as createPalette from '@material-ui/core/styles/createMuiTheme';
declare module '@mui/material/styles/createMuiTheme' {
  interface ThemeOptions {
    status?: { danger: string };
  }
}
