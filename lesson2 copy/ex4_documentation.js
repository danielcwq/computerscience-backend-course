
/*async function myNewAsyncFunction(){
        setTimeout(()=>{
            console.log("hello there")
            },3140)
        
}
myNewAsyncFunction()
console.log('byeeee')
*/
// TODO 1: Start execution of all your code below ONLY 3.14 seconds after executing this program.
// Maybe try it with simpler code first?


// TODO 2: (the following 3 parts should be done together but you should apporach it step-by-step)
// (i) Use Fetch to 
// (ii) obtain the latest exchange rates and latest conversion rate 
// (iii) for two supported symbols
var requestURL = 'https://api.exchangerate.host/latest';
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

/*request.onload = function() {
  var response = request.response;
  console.log(response);
}
*/
        
const fetch = require('node-fetch');
fetch(requestURL).then(res => res.json()).then(json => console.log(json));


var requestURL2 = 'https://api.exchangerate.host/convert?from=USD&to=EUR&amount=1200'
var XMLHttpRequest2 = require('xmlhttprequest').XMLHttpRequest;
var newreq = new XMLHttpRequest2();
newreq.open('GET', requestURL2);
newreq.responseType = 'json';
newreq.send();

fetch(requestURL2).then(res => res.json()).then(json => console.log(json.query));

var requestURL3 = 'https://api.exchangerate.host/symbols'
var XMLHttpRequest3 = require('xmlhttprequest').XMLHttpRequest;
var brandnewreq = new XMLHttpRequest3();
brandnewreq.open('GET', requestURL3);
brandnewreq.responseType = 'json';
brandnewreq.send()

fetch(requestURL3).then(res => res.json()).then(json => console.log(json))