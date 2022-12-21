import PropTypes from 'prop-types';
import * as React from 'react';
import { useContext, useMemo } from 'react';

export const DEFAULT_BREAKPOINTS = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
export const DEFAULT_MIN_BREAKPOINT = 'xs';

export interface ThemeContextValue {
  prefixes: Record<string, string>;
  breakpoints: string[];
  minBreakpoint?: string;
  dir?: string;
}

export interface ThemeProviderProps extends Partial<ThemeContextValue> {
  children: React.ReactNode;
}

const ThemeContext = React.createContext<ThemeContextValue>({
  prefixes: {},
  breakpoints: DEFAULT_BREAKPOINTS,
  minBreakpoint: DEFAULT_MIN_BREAKPOINT,
});
const { Consumer, Provider } = ThemeContext;

function ThemeProvider({
  prefixes = {},
  breakpoints = DEFAULT_BREAKPOINTS,
  minBreakpoint = DEFAULT_MIN_BREAKPOINT,
  dir,
  children,
}: ThemeProviderProps) {
  const contextValue = useMemo(
    () => ({
      prefixes: { ...prefixes },
      breakpoints,
      minBreakpoint,
      dir,
    }),
    [prefixes, breakpoints, minBreakpoint, dir],
  );

  return <Provider value={contextValue}>{children}</Provider>;
}

ThemeProvider.propTypes = {
  prefixes: PropTypes.object,
  breakpoints: PropTypes.arrayOf(PropTypes.string),
  minBreakpoint: PropTypes.string,
  dir: PropTypes.string,
} as any;

export function useBootstrapPrefix(
  prefix: string | undefined,
  defaultPrefix: string,
): string {
  const { prefixes } = useContext(ThemeContext);
  return prefix || prefixes[defaultPrefix] || defaultPrefix;
}

export function useBootstrapBreakpoints() {
  const { breakpoints } = useContext(ThemeContext);
  return breakpoints;
}

export function useBootstrapMinBreakpoint() {
  const { minBreakpoint } = useContext(ThemeContext);
  return minBreakpoint;
}

export default ThemeProvider;

