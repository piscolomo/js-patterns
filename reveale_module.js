var PrintModule = (function(){  
   config = {size: "A3", type: "black&white"};

   function privategetDetails(){
    console.log("Actual size: " + config.size + ", actual type of colors: " + config.type);
   }

   function publicPrint(){
    console.log("printing in "+ config.size);
   }

   function publicChangesize(){
    if (typeof newsize === "string"){
      config.size = newsize;
      console.log("impresora change the default size to "+ newsize);
    }
   }

   function publicgetDetails(){
    privategetDetails();
   }

   // Reveal public pointers to private functions and properties
   return {
     print: publicPrint,
     changesize: publicChangesize,
     getDetails: publicgetDetails
   }
//invoke IIFE
})()