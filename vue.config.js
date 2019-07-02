module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/assets/variables.scss";'
      }
    }
  },

  publicPath: undefined,
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: false,
  parallel: undefined
};