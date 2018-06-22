var main = require('./main')
var result = null;


result = main.add(5, 2);
console.log('5+2='+result);


var maxStringLength = 200;
var theStringBuffer = new Buffer(maxStringLength);
theStringBuffer.fill(0); //if you want to initially clear the buffer
theStringBuffer.write("Hello world", 0, "utf-8"); //if you want to give it an initial value


let resultBuffer = main.testFunciton(theStringBuffer)


var theString = resultBuffer.toString('utf-8');
var terminatingNullPos = theString.indexOf('\u0000');
if (terminatingNullPos >= 0) {theString = theString.substr(0, terminatingNullPos);}


console.log("******")
console.log("FROM NODEJS")
console.log(theString);
