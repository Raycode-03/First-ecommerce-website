// let {add,sub,mulit,divide}=require('./math')
// let os=require('os');

// console.log(os.type());
// console.log(os.version());
// console.log(__dirname);
// let path=require('path')
// let p=path.parse(__filename)
// console.log(p)
// console.log(add(2,5))
// console.log(mulit(2,5))
// console.log(sub(2,5))
// console.log(divide(2,5))
// second lesson 
let fs=require('fs');
fs.readFile=('./new.txt',(err,data)=>{
    if(err){throw err}
        console.log(data.toString(radix));
});
// console.log(fs.readFile())