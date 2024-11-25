const fs = require("fs");
const os = require("os");
console.log("STEP ONE...", os.cpus().length);

fs.writeFile("node/abc.txt","hello world",() => {
    console.log("STEP TWO");
});
// blocking cone- sync code
try{
    const data = fs.readFileSync("nodeJS/demo.txt");
    console.log("STEP THREE");
    console.log(data.toString());
}catch (err){
console.log(err);
}
// const data = fs.readFileSync("nodeJS/demo.txt");
// console.log(data.toString());

// non blocking code -async code
// fs.readFile("nodeJs/demo.txt",(err,data) =>{
//     if (err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });
console.log("STEP  FOUR...");
console.log("STEP  FIVE...");  