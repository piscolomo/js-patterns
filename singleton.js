var Marker = (function(){
	var instance;

	function Singleton(options){
		this.options = options || {};
		this.coordX = this.options.coordX || 12.60;
		this.coordY = this.options.coordY || 60.25;
		this.showCoords = function(){
			console.log("you are in X: " + this.coordX + " and Y:" + this.coordY);
		};
	}

	return {
		//method for get the unique instance of our singleton
		getInstance: function(options){
			//if instance is not defined create one, if instance already exist return it
			if ( instance === undefined ){
				instance = new Singleton(options);
			}
			return instance;
		}
	}
})();

//output you are in X: 30.58 and Y:60.25
var marker1 = Marker.getInstance({coordX: 30.58});
marker.showCoords();

var marker2 = Marker.getInstance();

//output true, that's because both objects have the same instance
marker1 === marker2;