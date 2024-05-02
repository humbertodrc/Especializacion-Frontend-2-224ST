import { FC, createContext, ReactNode, useState } from "react";

interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTtheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextType);

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTtheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

	return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTtheme
      }}
    >
			{/* Componentes hijos */}
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
