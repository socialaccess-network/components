import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
	build: {
		lib: {
			entry: {
				index: resolve(__dirname, 'src/index.ts'),
			},
			formats: ['es'],
		},
		rollupOptions: {
			external: ['vue'],
			output: {
				globals: {
					vue: 'Vue',
				},
			},
		},
	},

	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@import "sassy";',
				includePaths: [resolve(__dirname, 'src/styles')],
			},
		},
	},

	plugins: [
		vue(),
		Components({
			dirs: ['src/components'],
			dts: 'volar.d.ts',
			deep: true,
			directoryAsNamespace: true,
		}),
	],
})
