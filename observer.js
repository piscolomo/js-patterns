var Observable = {
	observers: [],
	subscribe: function(observer){
		this.observers.push(observer);
	},
	unsubscribe: function(observer){
		var index=this.observers.indexOf(observer);
		if (index){
			this.observers.splice(index,1);
		}
	},
	notify: function(message){
		for(var i=0;i<this.observers.length;i++){
			this.observers[i](message);
		}
	}
};	

Observable.subscribe(function(message){
  console.log("One cool message:" + message)
})

var observer = function(message){
  console.log("Other cool message:" + message)
}

Observable.subscribe(observer);

Observable.notify('test 1')
// One cool message:test 1
// Other cool message:test 1

Observable.unsubscribe(observer)

Observable.notify('test 2')
// One cool message:test 2