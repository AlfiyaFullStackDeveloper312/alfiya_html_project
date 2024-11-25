source ~/.zshrc
// function add(a, b) {
//     console.log(a + b);
//     return(a + b);
// }
//  function subtract(a, b){
//     console.log(a - b);
//     return(a - b);
//  }
//   function sayhello(){
//     console.log("hello")
//     return(hello);
//   }
//   module.exports = {
//     add,
//     subtract,
//     sayhello,
//   };
function add(a, b){
    console.log(a + b);
    return (a + b);
}
function subtract(a, b){
    console.log(a - b);
    return(a - b);
}
function sayHello(){
    console.log("Hello World");
    return("hello");
} 
module.exports = {
    add,
    subtract,
    sayHello,
};