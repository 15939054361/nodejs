let md5 = require("md5")

// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter()

// console.log(md5("message"))
/**  
*fs
*/
let fs = require("fs");
/**
 *  检查是否为目录或文件 
 */
fs.stat('./dire/1.txt', function (err, res) {
    if (err) {
        return
    }
    console.log("目录", res.isDirectory())
    console.log("文件", res.isFile())
})

/**
 *  检查是否为目录或文件 
 */
fs.readFile('./dire/1.txt', function (err, buf) {
    console.log(err)
    console.log(md5(buf));
})

/**
 *  创建目录
 */
fs.mkdir('./test', function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log("创建目录成功");
})
/**
 *  创建文件
 */
fs.writeFile('./test/index.html', "你好node", function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log("创建文件成功");
})

/**
 *  追加文件
 */
fs.appendFile('./test/index.css', "body{color:red}", function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log("追加文件成功");
})

/**
 *  读取文件
 */

fs.readFile('./test/index.css', function (err,data) {
    if (err) {
        console.log(err)
        return
    }
    console.log(data.toString());
})

/**
 *  读取目录
 */
fs.readdir('./test', function (err,data) {
    if (err) {
        console.log(err)
        return
    }
    console.log(data)
})