const mkdirp = require('mkdirp')
mkdirp('./test/fs/index.js').then(made =>
    console.log(`made directories, starting with ${made}`)).catch(res => {
        console.log(res)
    })



const fs = require("fs")
fs.writeFile("./test/fs/index2.js", "//测试创建", (error) => {
    if (error) {
        console.log(error)
    }
})