import { createContext, useState } from "react";

import React from 'react'

interface ThemeType {
	isAnotherStyle: boolean;
	toggleTheme?: () => void;
}

export const ThemeContext = createContext<ThemeType | null>(null)

interface ProviderProps {
	children: React.ReactNode
}

const ThemeCProvider: React.FC<ProviderProps> = ({ children }) => {
	const [isAnotherStyle, setAnotherStyle] = useState<boolean>(() => {
		const savedThemeinWeb = localStorage.getItem('isAnotherStyle');
		return savedThemeinWeb ? JSON.parse(savedThemeinWeb) : true;
	});

	const toggleTheme = () => {
		setAnotherStyle(prevStyle => {
		  const newStyle = !prevStyle;
		  localStorage.setItem('isAnotherStyle', JSON.stringify(newStyle));
		  return newStyle;
		});
	  };

  	return (
		<ThemeContext.Provider value={{ isAnotherStyle, toggleTheme}}>
			{children}
		</ThemeContext.Provider>
  	)
}

export default ThemeCProvider
