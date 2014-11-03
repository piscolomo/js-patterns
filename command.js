var BookManager = {
	getInfo: function(bookid){
		console.log("The request info of the book with the ID "+bookid+" is procesing...");
	},

	buyBook: function(bookid){
		console.log("Thanks for purchase the book wit the ID "+bookid);
	},

	//command
	execute: function(name){
		//send all the other variables after the name of the requested function
		if (this[name]) this[name].apply(BookManager, [].slice.call(arguments, 1));
	}
}

var action1 = BookManager.execute("getInfo", "4737");
var action2 = BookManager.execute("buyBook", "6373");