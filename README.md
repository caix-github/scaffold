<!--
 * @Author: caixin 1058360098@qq.com
 * @Date: 2022-12-16 16:40:50
 * @LastEditors: caix 1058360098@qq.com
 * @LastEditTime: 2023-11-30 15:45:19
 * @FilePath: \zapx-cli\README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# 脚手架（构建模板脚手架）

## 安装方式（由于部署在私有库，所以需切换私有库地址安装）
-----------------
1.nrm安装（推荐）
```
npm install -g nrm
nrm add <源名> <源地址>
nrm use <源名>
npm install -g zapx-cli
```

2.直接切换源安装
```
npm install -g zapx-cli --registry=<源地址>
```

## 引用方式
```
zapx-cli init <项目名称>
```