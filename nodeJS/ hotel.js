 const http = require("http");
const { Pool } = require("pg");
  

//  async function gethotelmenu(req, res){
//     try{
//      const result = await DataTransfer.query
//  }
 
 function getmenulist(request,response){
    return a.end("menu list found");
 }
let server = http.createserver((reg,res) => {
   if(req.url ==="/menu") {
    getmenulist(req,res);
   }else{
    res.end("page not found");
    // studenthandeler
   }
});
Server.listen(4000,"127.0.0.1",() => {
    console.log("server is running on port 400")
})
