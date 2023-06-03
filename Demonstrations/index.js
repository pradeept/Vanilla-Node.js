(function () { 
    const someMod = require('./someMod');
    
    console.log(someMod.name);
    someMod.setName("superman");
    console.log(someMod.name);
 })();

 const another = require('./someMod');
 console.log(another.name);