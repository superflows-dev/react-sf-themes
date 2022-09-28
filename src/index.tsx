function getTheme() {

  let colors;

  colors = {
    primaryBgColor: '#0d6efd',
    secondaryBgColor: '#6c757d',
    dangerBgColor: '#dc3545',
    successBgColor: '#198754',
    warningBgColor: '#ffc107',
    infoBgColor: '#0dcaf0',
    lightBgColor: '#f8f9fa',
    darkBgColor: '#212529',
    primaryTextColor: '#ffffff',
    secondaryTextColor: '#ffffff',
    dangerTextColor: '#ffffff',
    successTextColor: '#ffffff',
    warningTextColor: '#000000',
    infoTextColor: '#000000',
    lightTextColor: '#000000',
    darkTextColor: '#ffffff'
  }

  let variants;

  variants = {
    primary: "primary",
    secondary: "secondary",
    danger: "danger",
    success: "success",
    warning: "warning",
    info: "info",
    light: "light",
    dark: "dark"
  }

  let types;

  types = {
    filled: "filled",
    outlined: 'outlined'
  }

  let spaces;

  spaces = {
    min: '5',
    ltl: '10',
    mod: '15',
    big: '20',
    lrg: '25',
    xlg: '30',
    max: '35',
  }

  let modes;

  modes = {
    day: "day",
    night: "night"
  };

  let inputTypes;

  inputTypes = {
    name: "name",
    email: "email",
    mobile: "mobile",
    gender: "gender",
    date: "date",
    dateOfBirth: "dateOfBirth"
  }

  let dimensions;

  dimensions = {
    navHeight: '50',
    menuWidth: '120'
  }

  let breakpoints;

  breakpoints = {
    mobile: 480,
    tablet: 768,
    laptop: 1024,
    desktop: 1200
  };

  return {colors: colors, variants: variants, types: types, spaces: spaces, modes: modes, inputTypes: inputTypes, dimensions: dimensions, breakpoints: breakpoints};

}

const exportFunctions = {
  getTheme
};

export default exportFunctions;
