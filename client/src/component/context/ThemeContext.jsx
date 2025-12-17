import React, { createContext, useContext, useState, useEffect } from 'react';



const ThemeContext = createContext();



export const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useState(() => {

    // Check for window availability to avoid build errors during SSR/static generation

    if (typeof window !== 'undefined') {

      return localStorage.getItem('theme') || 'dark';

    }

    return 'dark';

  });



  useEffect(() => {

    const root = window.document.documentElement;

    root.setAttribute('data-theme', theme);

    localStorage.setItem('theme', theme);

  }, [theme]);



  const toggleTheme = () => {

    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  };



  return (

    <ThemeContext.Provider value={{ theme, toggleTheme }}>

      {children}

    </ThemeContext.Provider>

  );

};



export const useTheme = () => useContext(ThemeContext);