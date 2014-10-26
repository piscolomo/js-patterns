function Car( model, year, miles ) {
  this.model = model;
  this.year = year;
  this.miles = miles;
}
 
// Extend or change properties with prototype
Car.prototype.toString = function () {
  return this.model + " has done " + this.miles + " miles";
};
 
var civic = new Car( "Honda Civic", 2009, 20000 );
 
//output: "Honda Civic has done 20000 miles" 
console.log( civic.toString() );