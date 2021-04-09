const {
  override,
  addLessLoader, // less配置函数
  fixBabelImports, // 按需加载配置函数
  addBabelPlugins, // babel插件配置函数
  addWebpackAlias, // /路径别名
} = require('customize-cra');
const path = require("path");
module.exports = override(
  ...addBabelPlugins( // 支持装饰器
      [
          '@babel/plugin-proposal-decorators',
          { legacy: true}
      ]
  ),
  fixBabelImports('import', { // antd 按需加载
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true  //自动打包相关的样式 默认为 style:'css',这里需要改为true
  }),
  addLessLoader(
      {
          javascriptEnabled: true,
          modifyVars: {
            hack: `true; @import "~@/skin.less";`
          }
      }
  ),
  addWebpackAlias({ //路径别名
      '@': path.resolve(__dirname, 'src'),
  }),
  (config) => {
      //修改、添加loader 配置 :
      // 所有的loaders规则是在config.module.rules(数组)的第二项
      // 即：config.module.rules[2].oneof  (如果不是，具体可以打印 一下是第几项目)
      // 修改 less 配置 ，规则 loader 在第7项(具体可以打印配置)
      const loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf;
      loaders[7].use.push({
          loader: 'style-resources-loader',
          options: {
              patterns: path.resolve(__dirname, 'src/style/common.less')//全局引入公共的scss 文件
          }
      })
      return config
  }
)