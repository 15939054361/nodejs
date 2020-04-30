let http = require("http")
const fs = require("fs")
const path = require("path")
http.createServer(async (request, response) => {
    let url = request.url;
    console.log("url", url)
    if (url !== "/favicon.ico") {
        let res = await searchFile(url)
        console.log("res", res)
        if (!res) {
            response.writeHead(400, { 'Content-Type': 'text/html;charset="utf-8"' });
            response.end("这个页面不存在")

            return
        } else {
            response.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
            response.end("你好")

        }
    }
    // response.write("你好,node")
}).listen(3000);
/* *
*查找文件
*/
function searchFile (url) {
    return new Promise((reslove, resject) => {
        fs.readdir("./html/home", (error, data) => {
            if (error) {
                resject(error)
                return
            }
            data.forEach(item => {
                if (item === url) {
                    reslove(true)
                } else {
                    reslove(false)
                }
            })
        })
    })

}
console.log(".css".toString)
findFileName()
function findFileName (url) {
    return new Promise((reslove, resject) => {
        fs.readFile("./json/mime.json", (error, data) => {
            if (error) {
                resject(error)
                return
            }
            console.log(JSON.parse(data.toString())['.css'])
            // data.forEach(item => {
            //     if (item === url) {
            //         reslove(true)
            //     } else {
            //         reslove(false)
            //     }
            // })
        })
    })

}
console.log("port===>", "http://127.0.0.1:3000/")
// module.exports = num
// exports.num = num
// exports.say = say