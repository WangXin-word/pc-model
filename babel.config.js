/*
 * @Author: 汪鑫
 * @Date: 2021-09-28 10:41:30
 * @Annotate: 输入这页的内容
 * @LastEditTime: 2021-09-28 11:30:55
 * @LastEditors: 汪鑫
 * @Description: 
 * @FilePath: /pc-model/babel.config.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
module.exports = {
  // "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
