// let http = require("http")
// http.createServer((request, response) => {
//     response.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
//     response.write("你好,node")
//     response.end("你好,朋友u")
// }).listen(3000);

// exports.axios = http
let num = 1
function say () {
    console.log("你好node")
}
module.exports=say
module.exports=num
// exports.num = num
// exports.say = say