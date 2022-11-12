
/* const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); */


// callback
/* const fs = require('fs') 

fs.readFile('./text.txt',callback)



function callback(err,content){
    if (err) return console.error('erro')
    console.log(String(content))
}

console.log('primeiro comando.')
console.log('segundo comando.')
console.log('terceiro comando.')


setTimeout(()=> (console.log('testando setTimeoutmy')),3000)


console.log('comando que esta apos setTimeout') */

function callback_teste(){
const data = new Date
h=data.getHours
m =data.getMinutes
s =data.getSeconds
ml= data.getMilliseconds
 //console.log("Hora"  + ": " + data.getHours() + " : " + data.getMinutes() + " : " + data.getSeconds() )
} 
setTimeout (()=>console.log(callback_teste),5000)
//setTimeout (callback_teste,5000
//setTimeout (callback_teste,5000)

//setInterval(callback_teste,5000)

//setInterval(callback_teste,5000)

//setInterval(callback_teste,5000)
