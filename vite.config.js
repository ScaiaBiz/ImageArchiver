import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	// server: { port: 3001 },
	define: {
		'process.env': process.env,
	},
	css: {
		modules: {
			generateScopedName: '[name]_[local]_[hash:base64:5]',
		},
	},
	base: '/ImageArchiver/',
});
