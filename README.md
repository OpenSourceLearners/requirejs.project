前端项目

工具：
  1、npm
  2、bower
  3、ESLint
  4、typings

插件：
  1、requirejs
  2、require-text
  3、require-css
  4、jquery
  5、underscore

第一步：先安装npm
第二步：安装bower
  命令：npm install 或者 cnpm install
第三步：安装js插件
  命令：bower install
第四步:编译打包命令
  cmd窗口命令：r.js.cmd -o build.js
  node执行：r.js -o build.js

typings使用
  安装jquery提示：typings install dt~jquery --global --save

编译输出目录（运行环境）：
  ./dist