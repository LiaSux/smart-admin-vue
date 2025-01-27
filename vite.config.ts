import type { ConfigEnv, UserConfig } from 'vite'
import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import AutoImport from 'unplugin-auto-import/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
// import eslintPlugin from 'vite-plugin-eslint'
import { proxy } from './src/config/proxy.ts'

export default ({ mode }: ConfigEnv): UserConfig => {
  const isDev = mode === 'development'

  console.log('当前环境:', isDev ? '开发环境' : '生产环境')

  const config: UserConfig = {}

  config.resolve = {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@smart': resolve(__dirname, 'smart'),
    },
  }

  config.css = {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  }

  // 插件配置
  config.plugins = [
    vue(),
    // eslintPlugin({
    //   cache: false, // 禁用缓存
    //   include: [
    //     /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
    //     /\.vue$/,
    //     /\.vue\?vue/, // .vue
    //   ],
    //   fix: true,
    // }),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
      ],
      resolvers: [AntDesignVueResolver({ importStyle: 'less' })],
      dts: true,
    }),
    Components({
      dirs: [],
      extensions: ['vue'],
      resolvers: [AntDesignVueResolver({ importStyle: 'less' })],
      dts: true,
    }),
  ]

  // 服务配置
  config.server = {
    port: 7000,
    proxy,
  }

  console.log(config.server, 'proxy===')

  return defineConfig(config)
}
