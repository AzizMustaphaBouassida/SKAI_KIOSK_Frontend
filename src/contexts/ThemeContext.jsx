import React, { createContext, useEffect } from 'react'
import { THEME_COLORS, THEME_FONTS, CLIENT_LOGO, getCSSVariables } from '../config/theme'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  useEffect(() => {
    const root = document.documentElement
    const cssVars = getCSSVariables()
    
    Object.entries(cssVars).forEach(([property, value]) => {
      root.style.setProperty(property, value)
    })

    const loadGoogleFonts = () => {
      const existingLinks = document.querySelectorAll('link[data-theme-font]')
      existingLinks.forEach(link => link.remove())

      Object.values(THEME_FONTS).forEach(font => {
        if (font.googleFontsUrl) {
          const link = document.createElement('link')
          link.href = font.googleFontsUrl
          link.rel = 'stylesheet'
          link.setAttribute('data-theme-font', 'true')
          document.head.appendChild(link)
        }
      })
    }

    loadGoogleFonts()
  }, [])

  const themeValue = {
    colors: THEME_COLORS,
    fonts: THEME_FONTS,
    logo: CLIENT_LOGO,
    // Helper function to get color values
    getColor: (colorName) => THEME_COLORS[colorName],
    // Helper function to get font values
    getFont: (fontName) => THEME_FONTS[fontName],
    // Helper function to get logo values
    getLogo: (variant = 'main') => {
      if (CLIENT_LOGO.variants && CLIENT_LOGO.variants[variant]) {
        return CLIENT_LOGO.variants[variant]
      }
      return CLIENT_LOGO.src
    },
    // Helper function to get style objects
    getStyle: (colorType) => {
      switch (colorType) {
        // Customizable colors
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
        
        // Standard colors
        case 'white':
          return { color: THEME_COLORS.white }
        case 'whiteBg':
          return { backgroundColor: THEME_COLORS.white }
        case 'whiteBorder':
          return { borderColor: THEME_COLORS.white }
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
        case 'red':
          return { color: THEME_COLORS.red }
        case 'redBg':
          return { backgroundColor: THEME_COLORS.red }
        case 'redBorder':
          return { borderColor: THEME_COLORS.red }

        // Font styles
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
  }

  return (
    <ThemeContext.Provider value={themeValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
