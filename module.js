//namespacing
var PrintModule = (function(){  
  //private variable, only get by closure 
   config =  {
     size: "A3"
   };

   //object expose
   return {
     print: function(){
       console.log("printing in "+ config.size);
     },
     changesize: function(newsize){
      if (typeof newsize === "string"){
        config.size = newsize;
        console.log("impresora change the default size to "+ newsize);
      }
     }
   }
//invoke IIFE
})()