// create a ninja object with constructor, this object needs to have a name, and a method for shoot shuriken

function createNinja(name){
    
    this.name = name;
    this.shootShuriken = function(){
      console.log("Atirou a shuriken")
    };   
}

let sasuke = new createNinja('Sasuke');

console.log(sasuke.shootShuriken());