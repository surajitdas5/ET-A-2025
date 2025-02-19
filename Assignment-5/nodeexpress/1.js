const fs = require('fs')

// console.log(__dirname);
// console.log(__filename);
console.log('Start')
// fs.readFile("text.txt", "utf-8", (err, data)=>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })

// let data = fs.readFileSync("text.txt", "utf-8")
// console.log(data);

// fs.writeFile("text.txt", "New Data", (err)=>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log("File Written");
//     }
// })

// fs.appendFile('text.txt', '\nSome more data', (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('File Updated')
//     }
// })

fs.unlink('text.txt', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('File Deleted')
    }
})

console.log('End')
