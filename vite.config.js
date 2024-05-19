import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [
        vue(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @import './src/assets/scss/_config.scss';
                    @import './src/assets/scss/_base.scss';
                    @import './src/assets/scss/utils/_functions.scss';
                    @import './src/assets/scss/utils/_mixins.scss';
                `
            }
        }
    }
})
