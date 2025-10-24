// Import logo assets
import logoMain from '../assets/images/logo.svg'

export const THEME_COLORS = {
  // ========== CUSTOMIZABLE COLORS ==========
  // Primary color - Used for main branding elements, borders, and accents
  primary: '#DA291C',

  // Secondary color - Used for highlights, buttons, and secondary elements  
  secondary: '#FFBC0D',

  // ========== STANDARD COLORS ==========
  white: '#FFFFFF',
  black: '#000000',
  greyLight: '#ECECEC',
  greyDark: '#D5D5D5',
  greyDarker: '#868686',
  success: '#00AA06',
  error: '#EF4444',
}

// ========== FONT SYSTEM ==========
export const THEME_FONTS = {
  serious: {
    family: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
    weights: [400, 500, 600, 700],
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
  },

  branded: {
    family: "'Poppins', 'Helvetica Neue', sans-serif",
    weights: [300, 400, 500, 600, 700],
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap'
  },

  baloo: {
    family: "'Baloo Tamma 2', 'Poppins', sans-serif",
    weights: [400, 500, 600, 700],
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@400;500;600;700&display=swap'
  }
}

// ========== CLIENT LOGO SYSTEM ==========
export const CLIENT_LOGO = {
  // Change this path to update the logo across the entire application
  src: logoMain,
  alt: 'Client Logo',
  variants: {
    main: logoMain,
    white: logoMain,
    small: logoMain
  }
}

export const getCSSVariables = () => ({
  '--theme-primary': THEME_COLORS.primary,
  '--theme-secondary': THEME_COLORS.secondary,
  '--theme-white': THEME_COLORS.white,
  '--theme-black': THEME_COLORS.black,
  '--theme-grey-light': THEME_COLORS.greyLight,
  '--theme-grey-dark': THEME_COLORS.greyDark,
  '--theme-grey-darker': THEME_COLORS.greyDarker,
  '--theme-success': THEME_COLORS.success,
  '--theme-error': THEME_COLORS.error,
  '--font-serious': THEME_FONTS.serious.family,
  '--font-branded': THEME_FONTS.branded.family,
  '--font-baloo': THEME_FONTS.baloo.family,
})

export const getThemeColors = () => THEME_COLORS
export const getThemeFonts = () => THEME_FONTS
export const getClientLogo = () => CLIENT_LOGO

export const getThemeStyle = (colorType) => {
  switch (colorType) {
    case 'primary':
      return { color: THEME_COLORS.primary }
    case 'primaryBg':
      return { backgroundColor: THEME_COLORS.primary }
    case 'primaryBorder':
      return { borderColor: THEME_COLORS.primary }
    case 'secondary':
      return { color: THEME_COLORS.secondary }
    case 'secondaryBg':
      return { backgroundColor: THEME_COLORS.secondary }
    case 'secondaryBorder':
      return { borderColor: THEME_COLORS.secondary }

    case 'white':
      return { color: THEME_COLORS.white }
    case 'whiteBg':
      return { backgroundColor: THEME_COLORS.white }
    case 'black':
      return { color: THEME_COLORS.black }
    case 'blackBg':
      return { backgroundColor: THEME_COLORS.black }
    case 'greyLight':
      return { color: THEME_COLORS.greyLight }
    case 'greyLightBg':
      return { backgroundColor: THEME_COLORS.greyLight }
    case 'greyLightBorder':
      return { borderColor: THEME_COLORS.greyLight }
    case 'greyDark':
      return { color: THEME_COLORS.greyDark }
    case 'greyDarkBg':
      return { backgroundColor: THEME_COLORS.greyDark }
    case 'greyDarkBorder':
      return { borderColor: THEME_COLORS.greyDark }
    case 'greyDarker':
      return { color: THEME_COLORS.greyDarker }
    case 'greyDarkerBg':
      return { backgroundColor: THEME_COLORS.greyDarker }
    case 'greyDarkerBorder':
      return { borderColor: THEME_COLORS.greyDarker }
    case 'success':
      return { color: THEME_COLORS.success }
    case 'successBg':
      return { backgroundColor: THEME_COLORS.success }
    case 'successBorder':
      return { borderColor: THEME_COLORS.success }
    case 'error':
      return { color: THEME_COLORS.error }
    case 'errorBg':
      return { backgroundColor: THEME_COLORS.error }
    case 'errorBorder':
      return { borderColor: THEME_COLORS.error }

    case 'fontSerious':
      return { fontFamily: THEME_FONTS.serious.family }
    case 'fontBranded':
      return { fontFamily: THEME_FONTS.branded.family }
    case 'fontBaloo':
      return { fontFamily: THEME_FONTS.baloo.family }

    default:
      return {}
  }
}