export const COLORS = {};

export enum BASE {
	sidebarBG = "#FBFBFB",
	sidebarBorder = "#E1E1E2",
	homeTopBar = "#FCFCFC",
	BG = "#FFFFFF",
}

export enum DARK_THEME {
	sidebarBG = "linear-gradient(13.99deg, #0a0a0a 12.8%, #020202 87.79%)",
	sidebarBorder = "#ffffff14",
	homeTopBar = " linear-gradient(13.99deg, #0a0a0a 12.8%, #090909 27.79%)",
	BG = "linear-gradient(13.99deg, #0a0a0a 12.8%, #090909 87.79%)",
}

export const VAR = (key: string) => {
	return `var(--${key})`;
};

export const convertThemeObjectToStyle = (object: Record<string, string>) => {
	return Object.keys(object)
		.map((key) => `--${key}: ${object[key]}`)
		.join(";");
};

export const basicREMCSS = `
html {
    font-size: 1px;
}

// Because website were designed in this resolution
@media only screen and (max-width: 1520px) {
	html {
		font-size: calc(100vw / 1546);
	}
}

@media only screen and (max-width: 1400px) {
	html {
		font-size: 0.85px;
	}
}

@media only screen and (max-width: 800px) {
	html {
		font-size: 1px;
	}
}
`;
