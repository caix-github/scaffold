// 请求 fs-extra 库
const fse = require('fs-extra')
const path = require('path')

// 声明配置文件内容(配置文件地址)
const jsonConfig = {
  "name": "zapx-cli",
  "mirror": "http://192.168.0.133:10005/sun/"
}

// 拼接 config.json 完整路径
const configPath = path.resolve(__dirname,'../config.json')

async function defConfig() {
  try {
  	// 利用 fs-extra 封装的方法，将 jsonConfig 内容保存成 json 文件
    await fse.outputJson(configPath, jsonConfig)
  } catch (err) {
    console.error(err)
    process.exit()
  }
}

// 将上面的 defConfig() 方法导出
module.exports = defConfig
