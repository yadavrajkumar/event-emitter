//var string = "Hello i am from Import";
 
  var wish = function(name){

  	return "Hello good morning "+name;
  }


  var displayMessage = function(){

  	return "This is display function"
  }
/*module.exports = {
wish : wish,
display : displayMessage

};*/

module.exports.display = function(){

	return "This is my new function"
}