module.exports = {
	content: ["./app/**/*.{ts,tsx,jsx,js}"],
	theme: {
		darkMode: "class",
		screens: {
			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "1024px",
			// => @media (min-width: 1024px) { ... }

			lg: "1280px",
			// => @media (min-width: 1280px) { ... }
		},
		extend: {
			gridTemplateColumns: {
				"auto-fill": "repeat(auto-fill, minmax(0, 1fr))",
				"auto-fit": "repeat(auto-fit, minmax(0, 1fr))",
			},
		},
	},
	plugins: [require("daisyui"), require("@tailwindcss/line-clamp")],

	// daisy ui config
	daisyui: {
		styled: true,
		themes: [
			{
				rosepinedawn: {
					primary: "#dfdad9",
					secondary: "#cecacd",
					accent: "#2d2076",
					neutral: "#EDEDED",
					"base-100": "#fff",
					info: "#286983",
					success: "#56949f",
					warning: "#ea9d34",
					error: "#d7827e",
					"primary-content": "#343434",
				},
			},
			{
				rosepinemoon: {
					primary: "#2a273f",
					secondary: "#393552",
					accent: "#6e6a86",
					neutral: "#2a283e",
					"base-100": "#232136",
					info: "#3e8fb0",
					success: "#9ccfd8",
					warning: "#f6c177",
					error: "#ea9a97",
				},
			},
		],
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		prefix: "",
		darkTheme: "rosepinemoon",
	},
};

