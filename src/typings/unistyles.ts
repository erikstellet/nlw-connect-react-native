import { defaultTheme } from '@styles/themes'
import { UnistylesRegistry } from 'react-native-unistyles'

const breakpoints = {
  xs: 0,
  sm: 300,
  md: 500,
  lg: 800,
  xl: 1200,
}

type AppBreakpoints = typeof breakpoints
type AppThemes = {
  defaultTheme: typeof defaultTheme
}

declare module 'react-native-unistyles' {
  export interface UnistylesBreakpoints extends AppBreakpoints {}
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addBreakpoints(breakpoints)
  .addThemes({ defaultTheme: defaultTheme })
  .addConfig({
    adaptiveThemes: true,
  })
