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
    darkBgColor: '212529',
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

  return {colors: colors, variants: variants, types: types};

}

const exportFunctions = {
  getTheme
};

export default exportFunctions;
