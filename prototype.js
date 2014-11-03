function object(o){
	function F(){}
	F.prototype = o;
	return new F();
}

var cardefault = {
	llantas: 4,
	asientos: 4,
	drive: function(){
		console.log("wuu, we are driving!");
	}};

var mycar = object(cardefault);

//wuu, we are driving!
mycar.drive();

//ECMAS5
var mycar = Object.create(cardefault);

var mycar = Object.create(cardefault, {age: {value: 2}});

//true
mycar.hasOwnProperty("age");