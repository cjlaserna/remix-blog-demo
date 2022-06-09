module.exports = {
	content: ["./app/**/*.{ts,tsx,jsx,js}"],
	theme: {
		darkMode: "class",
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
					accent: "#9893a5",
					neutral: "#f4ede8",
					"base-100": "#faf4ed",
					info: "#286983",
					success: "#56949f",
					warning: "#ea9d34",
					error: "#d7827e",
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

