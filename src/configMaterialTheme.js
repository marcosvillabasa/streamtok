import { createMuiTheme } from "@material-ui/core/styles"

export const theme = createMuiTheme({
  overrides: {
    MuiTooltip: {
      tooltip: {
        backgroundColor: "#000",
        borderWidth: 2,
        borderColor: "#222",
        borderStyle: "solid",
        fontSize: 14,
      },
    },
  },
  palette: {
    primary: {
      main: "#ff0d57",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1600,
    },
  },
})
