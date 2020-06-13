module.exports = {
  publicPath:"./",
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'views': '@/views'
      }
    }
  }
}