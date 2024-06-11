import { useContext } from 'react'
import { ThemeContext } from '../context/Theme'

const useTheme = () => {
	const myThemeContext = useContext(ThemeContext)

	if(!myThemeContext) {
		throw new Error("You have problem with the themecontext")
	}

  	return myThemeContext;

}

export default useTheme
