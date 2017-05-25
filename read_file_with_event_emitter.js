var fs=require("fs");

var EventEmitter = require("events").EventEmitter;
var eventEmitter = new EventEmitter();
var path =require("path");
var filepath = path.join(__dirname,"/customerJson.json")

eventEmitter.on("reading_file",function(filepath){

	fs.readFile(filepath,"utf-8",function(err,data){
      if(err){

         
      	eventEmitter.emit("error",err)

      }
      else
      {

      	eventEmitter.emit("data",data)
      }

	})
})

eventEmitter.on("error",function(err){
console.log(err)

})

eventEmitter.on("data",function(data){

	console.log(data)
	eventEmitter.emit("finshed","Thank successfully finshed readFile")
})

eventEmitter.on("finshed",function(message){

	console.log(message)
})
eventEmitter.emit("reading_file",filepath);
