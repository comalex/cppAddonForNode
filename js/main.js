var ffi = require('ffi');
var ref = require('ref');
var int = ref.types.int;

var platform = process.platform;
var mathlib = null;

if (platform === 'win32'){
    mathlib = './build/Release/main.dll';
}else if(platform === 'linux'){
    mathlib = './build/Release/main.so';
}else if(platform === 'darwin'){
    mathlib = './build/Release/main.dylib'
}else{
    throw new Error('unsupported plateform for mathlib')
}

var math = ffi.Library(mathlib, {
    "add": [int, [int, int]],
    "minus": [int, [int, int]],
    "multiply": [int, [int, int]]
});

module.exports = math;