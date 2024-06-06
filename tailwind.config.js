const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				background: '#0f0f0f',
				'muted-background': '#232323',
				accent: '#0cb289',
				foreground: '#d0d0d0',
				'muted-foreground': '#7f8ea3',
			},
			keyframes: {
				scale: {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.05)' },
				},
			},
			animation: {
				scale: 'scale 2s infinite ease-in-out',
			},
		},
	},
	plugins: [],
}

export default config
