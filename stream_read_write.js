var fs= require("fs");

var filepath="./customerJson.json"

var readFile= fs.
           createReadStream(filepath,"utf-8");


readFile.on("data",function(piece){

	console.log(piece)
    console.log("crating new file as upadate.json "+ 
    "and writing the content in same file")
	var writeFile=fs.
           createWriteStream("./update.json","utf-8");

            writeFile.write(piece)
            writeFile.write(piece)
            console.log("\n")
            console.log("successfully written in update.json")


})
/*var writeFile=fs.
           createWriteStream("./update.json","utf-8");

    readFile.on("data",function(piece){
  
               console.log(piece)
            writeFile.write(piece)
            console.log(piece)
        })*/