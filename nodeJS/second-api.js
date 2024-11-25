//  function myfunction(x) {
//     return 1000;
//     return 200;
//  }
//   let x = myfunction();
//   let y = myfunction();
//   console.log("the value of x =" + x + "& value of y = " + y);
//  ----------------------------------------------
// function addtwonumber(x,y,action ){
//     if (action == "add"){
//         return x + y;
//     }  
//     else if (action == "sub "){
//         return x - y;
//     }
//     else if (action == "mult") {
//         // return x * y;
//         let a = x * y;
//         console.log(a);
//         return a;
//     }
//     else if (action == "div") {
//         return x / y;
//     }
// }
// let z = addtwonumber(10,4,"mult");
// console.log("the value of z = " + z);
// ---------------------------------------------
// function one(str,two){
//     let x = str.split("");
//     let y = x.reverse("");
//     let z = y.join("");
//     console.log(z);
//     if (two){
//         two(z);
//     }}
// function three(z) {
//     console.log("number = " + z  )
// }
// one("alfiya",three)
// ---------------------------------------
// analomous function shortcut of using function
// function callbackfunction(x){
//     x(100);
// }
// callbackfunction((y) => {
//     console.log("result =" + y);
// });
// ----------------------------------------------------
// const http =require("http");

//  let server =http.createServer((req, res) => {
//      res.write("Hello from Node.js");
//      res.end();
//  })
//  server.listen(3500, "127.0.0.1");