let num = require("./axios")
console.log(num)
console.log("端口" + 'http://127.0.0.1:3000')
let url = require("url")
let params = url.parse("http://127.0.0.1:3000?id=1", true).query
console.log(params.id)
