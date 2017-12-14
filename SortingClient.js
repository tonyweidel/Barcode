const Random = require("./Random.js");
const BookFactory = require("./BookFactory.js");
const IsbnEanAdapter = require("./IsbnEanAdapter.js");
const Sort = require('./sort.js');


let bf =new BookFactory()
let list = []
for(let x=0;x<10;x++){
  let year = Random().discreteRangeIn(1900,2017);
  list[x]=bf.create(year);
}
let isbns = [Number(EAN.sysCode)];
let sorted = Sort.insetion(list);
