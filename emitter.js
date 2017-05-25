var EventEmitter = require("events").EventEmitter;
var event = new EventEmitter();
event.on("wish",function(getMessage){

	console.log("Hi everyone "+getMessage)
})
event.emit("wish","good Morning !")

