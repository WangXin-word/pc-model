const WebpackSpritesmithPlugin = require('webpack-spritesmith')
const path = require('path')

const  spriteFormat = require('./sprites.conf')



function resolve(dir) {
    return path.join(__dirname, '..', dir)
  }
var templateFunction = function (data) {
    var perSprite = data.sprites.map(function (sprite) {
        return '.icon-%N% { display: inline-block;vertical-align: middle;background-repeat: no-repeat;background-image: url(%I%); background-size: %W%px %H%px;width: %NW%px; height: %NH%px; background-position: %X%px %Y%px;transform-origin: 0 0; transform: scale(0.99); }'
        .replace('%I%', data.sprites[0].image)
        .replace('%W%', data.spritesheet.width)
        .replace('%H%', data.spritesheet.height)
        .replace('%N%', sprite.name)
        .replace('%NW%', sprite.width)
        .replace('%NH%', sprite.height)
        .replace('%X%', sprite.offset_x)
        .replace('%Y%', sprite.offset_y);
    }).join('\n');

    return perSprite;
};

function GroupSpritesMithPlugin(options) {
}
GroupSpritesMithPlugin.prototype.apply = function(compiler) {
//   compiler.plugin('compile', function() {
     // 雪碧图插件
    for(var i=0;i<spriteFormat.length;i++){
        new WebpackSpritesmithPlugin({
            // 目标小图标
            src: {
              // 小图标路径
              cwd: path.join(__dirname, spriteFormat[i].cwd),
              // 匹配小图标文件后缀名
              glob: '*.png'
            },
            target: {
              // 生成雪碧图(大图)文件存放路径
              image: path.join(__dirname, spriteFormat[i].image),
              // 对应的样式文件存放路径
              css: [
                [path.join(__dirname, spriteFormat[i].css), {
                    format: 'function_based_template'
                }] ]
            },
            // 样式文件中,调用雪碧图的写法????
            apiOptions: {
              cssImageRef:spriteFormat[i].cssImageRef
            },
            // 雪碧图生成算法
            spritesmithOptions: {
              algorithm: 'top-down', // 从上到下生成方向.
              padding: 20// 每个小图标之间的间隙
            },
            customTemplates: {
              'function_based_template': templateFunction
            },
          }).apply(compiler)
    } 
  
//   });
};
module.exports = GroupSpritesMithPlugin;