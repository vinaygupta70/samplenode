// const a={
//     sum:(a,b) =>{
//         console.log(a+b);
//     },

//     mul:(a,b) => {
//         console.log(a*b);
//     }

// }
// module.exports=a;


//fileread in Async.....

// const fs=require("fs");

// fs.readFile("./sample.txt", "utf-8", (err, data) => {
//     if(err){
//         return err;
//     }
//     console.log(data);
// }
// ); 

// console.log("i am first");


// read file in sync....

// const fs=require("fs");
// const a=fs.readFileSync("./sample.txt", "Utf-8")
// console.log(a);
// console.log("i am first");


//write file in Async.........
// const fs=require("fs");
// const text="main likh gya bhai";
// const a=fs.writeFile("./sample1.txt", text, () =>{
//     console.log("written");
// });
// console.log("i am first");

//erite file in sync...................
// const fs=require("fs");
// const text="main aa gya hu bhai";
// fs.writeFileSync("./sample1.txt", text);

//path.......
// const path=require("path");
// const a=path.dirname("C:/Users/vinay/Desktop/Pepcoding web/NODE JS>");
// console.log(a);

//os.............
// const os=require("os");
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.freemem());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.networkInterfaces());

 
//npm pokemon third party module..............
// const pokemon=require("pokemon");
// console.log(pokemon.random());


var chalk = require("chalk");
const a=chalk.red("vinaygupta");
console.log(a);