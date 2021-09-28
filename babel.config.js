/*
 * @Author: 汪鑫
 * @Date: 2021-09-28 10:41:30
 * @Annotate: 输入这页的内容
 * @LastEditTime: 2021-09-28 10:59:36
 * @LastEditors: 汪鑫
 * @Description: 
 * @FilePath: /pc-model/babel.config.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
