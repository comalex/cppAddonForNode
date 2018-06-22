var ffi = require('ffi');
var ref = require('ref');
var int = ref.types.int;
var char = ref.types.char;

var ArrayType = require('ref-array');
var charArray = ArrayType(char);

var platform = process.platform;
var main = null;

if (platform === 'win32'){
    main = './build/Release/main.dll';
}else if(platform === 'linux'){
    main = './build/Release/main.so';
}else if(platform === 'darwin'){
    main = './build/Release/main.dylib'
}else{
    throw new Error('unsupported plateform for main')
}



// var mylib = ffi.Library('/path/to/mylib', { 
//   makeData: ['int', ['char **', 'uint *']], 
// }); 


// var lengthpointer = ref.alloc('uint'); 
// var datapointer = ref.alloc('char *'); 
// mylib.makeData(datapointer, lengthpointer); 
// var length = lengthpointer.deref(); 
// var data = ref.reinterpret(datapointer.deref(), length); 


var math = ffi.Library(main, {
    "add": [int, [int, int]],
    "testFunciton": ["string", ["char *"]],
});





module.exports = math;