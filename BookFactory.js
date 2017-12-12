const ISBN = require("./ISBN.js");
const EAN = require("./EAN.js");

const BookFactory = function (){

    function createBook(pubYear){
        //create this function
        if(pubYear < 2007){
          return new ISBN();
        }
        else{
          return new EAN();
        }
    }

    return {createBook};
}
function test(){
  let factory = new BookFactory();
  let b1 = factory.createBook(2007);
  console.log(b1.read());
}
test();
//module.exports = BookFactory;
