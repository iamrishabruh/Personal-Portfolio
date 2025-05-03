import { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Check system preference and localStorage
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const savedTheme = localStorage.getItem('theme')
    
    if (savedTheme === 'dark' || (!savedTheme && darkModeQuery.matches)) {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    }

    const handleChange = (e) => {
      if (!localStorage.getItem('theme')) {
        setIsDarkMode(e.matches)
        document.documentElement.classList.toggle('dark', e.matches)
      }
    }

    darkModeQuery.addEventListener('change', handleChange)
    return () => darkModeQuery.removeEventListener('change', handleChange)
  }, [])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light')
    // Dispatch custom event for theme change
    document.dispatchEvent(new CustomEvent('themeChanged'))
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const theme = {
  colors: {
    primary: {
      50: '#EFF6FF',
      100: '#DBEAFE',
      200: '#BFDBFE',
      300: '#93C5FD',
      400: '#60A5FA',
      500: '#3B82F6',
      600: '#2563EB',
      700: '#1D4ED8',
      800: '#1E40AF',
      900: '#1E3A8A',
    },
    gray: {
      50: '#F8FAFC',
      100: '#F1F5F9',
      200: '#E2E8F0',
      300: '#CBD5E1',
      400: '#94A3B8',
      500: '#64748B',
      600: '#475569',
      700: '#334155',
      800: '#1E293B',
      900: '#0F172A',
    },
    accent: {
      light: '#8B5CF6',
      dark: '#A78BFA',
      hover: {
        light: '#7C3AED',
        dark: '#8B5CF6',
      }
    },
    success: {
      light: '#10B981',
      dark: '#34D399',
      hover: {
        light: '#059669',
        dark: '#10B981',
      }
    },
    warning: {
      light: '#F59E0B',
      dark: '#FBBF24',
      hover: {
        light: '#D97706',
        dark: '#F59E0B',
      }
    },
    error: {
      light: '#EF4444',
      dark: '#F87171',
      hover: {
        light: '#DC2626',
        dark: '#EF4444',
      }
    },
    background: {
      light: '#FFFFFF',
      dark: '#0F172A',
      alt: {
        light: '#F8FAFC',
        dark: '#1E293B',
      }
    },
    text: {
      light: '#1E293B',
      dark: '#F8FAFC',
      alt: {
        light: '#475569',
        dark: '#CBD5E1',
      }
    }
  },
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '3rem',    // 48px
    '3xl': '4rem',    // 64px
  },
  typography: {
    h1: {
      fontSize: '3.5rem',    // 56px
      fontWeight: '700',
      lineHeight: '1.2',
      letterSpacing: '-0.025em',
    },
    h2: {
      fontSize: '2.25rem',   // 36px
      fontWeight: '600',
      lineHeight: '1.3',
      letterSpacing: '-0.025em',
    },
    h3: {
      fontSize: '1.875rem',  // 30px
      fontWeight: '600',
      lineHeight: '1.4',
    },
    h4: {
      fontSize: '1.5rem',    // 24px
      fontWeight: '600',
      lineHeight: '1.4',
    },
    body: {
      fontSize: '1rem',      // 16px
      fontWeight: '400',
      lineHeight: '1.6',
    },
    small: {
      fontSize: '0.875rem',  // 14px
      fontWeight: '400',
      lineHeight: '1.5',
    },
    fontFamily: {
      heading: 'Inter, system-ui, sans-serif',
      body: 'Inter, system-ui, sans-serif',
    },
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
  transitions: {
    default: 'all 0.3s ease-in-out',
    fast: 'all 0.15s ease-in-out',
    slow: 'all 0.5s ease-in-out',
  },
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
  },
}

export { ThemeContext }