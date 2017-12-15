const ISBN = require("./ISBN.js");
const EAN = require("./EAN.js");

function IsbnEanAdapter(isbnOBJ){
    //create function here
    let code = isbnOBJ.read();//our old ISBN
    let checkDigit = check();
    code = "978"+code;//bookland
    code = code.substring(0,12)
    function check(){
        let sum = 0;
        for(let c=0;c<12;c++){
            if(c%2 ==0){
                sum += 1*code[c];
            }
            else{
                sum += 3*code[c];
            }
        }
        let remainder = sum %10;
        if(remainder == 0){
            return 0;
        }
        return 10-remainder;
    }
    function read(){
        return code+"-"+checkDigit;
    }
    return {code, checkDigit, read};
}

function test(){
    let i = new ISBN();
    let e = new IsbnEanAdapter(i);
    console.log(e.code);
    console.log(e.checkDigit);
    console.log(e.read());
}

module.exports = IsbnEanAdapter
