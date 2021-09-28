var fs = require('fs');
const path = require('path')
var PATH = path.resolve(__dirname, '../src/common/sprites'); // 目录
//  遍历目录得到文件信息
function walk(path, callback) {
  var files = fs.readdirSync(path);

  files.forEach(function (file) {
    if (fs.statSync(path + '/' + file).isFile()) {
      callback(path, file);
    }
  });
}

// 修改文件名称
function rename(oldPath, newPath) {
  fs.rename(oldPath, newPath, function (err) {
    if (err) {
      throw err;
    }
  });
}


function CSS2LESSPlugin(options) {
}
CSS2LESSPlugin.prototype.apply = function(compiler) {
  compiler.plugin('compile', function() {
   // 运行
    walk(PATH, function (path, fileName) {
      var oldPath = path + '/' + fileName, // 源文件路径
        newPath = path + '/' + fileName.replace(/.css$/, '.less'); // 新路径
      if (fileName.indexOf(".css") > -1) rename(oldPath, newPath);
    });
  });
};
module.exports = CSS2LESSPlugin;