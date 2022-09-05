function getTheme() {

  let theme;

  theme = {
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
    success: "success",
    warning: "warning",
    info: "info",
    light: "light",
    dark: "dark"
  }

  return {theme: theme, variants: variants};

}

const exportFunctions = {
  getTheme
};

export default exportFunctions;
