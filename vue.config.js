const { defineConfig } = require('@vue/cli-service')
const {resolve} = require("node:path");
module.exports = defineConfig({
  configureWebpack: {
    performance: {
      hints: false,
      maxAssetSize: 1024000, // Aumenta el límite a 512 KiB
      maxEntrypointSize: 1024000, // Aumenta el tamaño del punto de entrada
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('@', resolve(__dirname, 'src'));
  },
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
      ? '/Portafolio-vue/docs/'
      : '/'
})
