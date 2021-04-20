var os = require('os')
var IPv4 = '127.0.0.1'
// 获取本地ip
try {
  for (var i = 0; i < os.networkInterfaces().en0.length; i++) {
    if (os.networkInterfaces().en0[i].family == 'IPv4') {
      IPv4 = os.networkInterfaces().en0[i].address
    }
  }
} catch (error) {
  IPv4 = '127.0.0.1'
}

module.exports = {
  devServer: {
    open: true,
    host: IPv4,
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1/',
        //  ws: true, // if you want to proxy websockets
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    },

    before: (app) => {
      console.log(app)
    }
  },
  outputDir: 'dist', // 放置打包后文件
  assetsDir: 'static', // 放置生成静态资源
  indexPath: 'index.html', // 打包输出html
  filenameHashing: true, // 文件名配置hash,解决缓存
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '广告平台',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    subpage: 'src/main.js'
  },
  // webpack 链接 API，用于生成和修改 webapck 配置
  // https://github.com/mozilla-neutrino/webpack-chain
  chainWebpack: (config) => {
    // 'src/lib' 目录下为外部库文件，不参与 eslint 检测
    config.module
      .rule('eslint')
      .exclude
      .add('/Users/maybexia/Downloads/FE/community_built-in/src/lib')
      .end()
  },
  // css配置解析
  css: {
    // 是否开启支持 foo.module.css 样式
    modules: false,

    // 是否使用 css 分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用 <style> 方式内联至 html 文件中
    extract: false,

    // 是否构建样式地图，false 将提高构建速度
    sourceMap: false,

    // css预设器配置项
    loaderOptions: {
      css: {
        // options here will be passed to css-loader
      },

      postcss: {
        // options here will be passed to postcss-loader
      }
    }
  },
  // 是否使用包含运行时编译器的Vue核心的构建
  runtimeCompiler: false,
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  parallel: require('os').cpus().length > 1,
  // 第三方插件配置
  pluginOptions: {},
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ]

}