const Random = require("./Random.js");
const BookFactory = require("./BookFactory.js");
const IsbnEanAdapter = require("./IsbnEanAdapter.js");
const Sort = require('./sort.js');


let bf =new BookFactory()
let list = []
for(let x=0;x<1000;x++){
  let year = Random().discreteRangeIn(1900,2017);
  if(x < 2007){
      list.unshift(new IsbnEanAdapter(bf.createBook(x)));
  }
  else{
      list.unshift(bf.createBook(x));
  }
}
let isbns = [];
for(let b = 0; b < list.length; b++){
  isbns.unshift(Number(list[b].code));
}
Sort.insertion(isbns);
