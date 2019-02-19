module.exports = {
  assetsPublicPath: './', // 配置config/index
  // baseUrl: process.env.NODE_ENV === 'development' ? './static/image/' : '/xcx/h/view/draw/static/image/',// 读取static文件下的文件，要拼接的前缀名
  base: './', // 配置router/index
  base_: process.env.NODE_ENV === 'development' ? '/hdbook/common/controllers/'  : 'http://proya.houjt.cn/hdbook/common/controllers/' // 配置api
}

/** build/utils文件
 *  if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        publicPath: '../../', // 这里是要加上去的 （大概第50行）
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
 * 
 * 
 */