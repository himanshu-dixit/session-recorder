import React, { ReactElement, useEffect, useState } from "react";
import { Theme, ThemeContext } from "../context/theme";
import { css } from "@emotion/react";
import { convertThemeObjectToStyle, DARK_THEME, BASE } from "../constants/styling";

export const withTheme = (Component: ReactElement): ((props) => JSX.Element) => {
	return (props) => {
		const themeInLS = typeof window !== "undefined" ? localStorage.getItem("theme") : null;

		const [theme, setTheme] = useState(themeInLS !== "light" ? Theme.Dark : Theme.Light);

		const toggleTheme = () => {
			const nextTheme = theme === Theme.Dark ? Theme.Light : Theme.Dark;
			setTheme(nextTheme);
			localStorage.setItem("theme", nextTheme);
		};
		const contextValue = { theme, toggleTheme };

		const cssVariableForTheme = css`
			${convertThemeObjectToStyle(theme === Theme.Dark ? DARK_THEME : BASE)}
		`;

		// This for initial hydration. Other logic must be present to initiate things.
		useEffect(() => {
			// If you want native OS theme mode. Uncomment next line and remove next-to next line
			// const isOSDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
			const isOSDarkMode = true;

			const finalTheme = themeInLS ? themeInLS : isOSDarkMode ? "dark" : "light";
			setTheme(finalTheme !== "light" ? Theme.Dark : Theme.Light);
		}, []);

		return (
			<div css={[cssVariableForTheme]} id="wrap-theme">
				<ThemeContext.Provider value={contextValue}>
					<Component {...props} />
				</ThemeContext.Provider>
			</div>
		);
	};
};
