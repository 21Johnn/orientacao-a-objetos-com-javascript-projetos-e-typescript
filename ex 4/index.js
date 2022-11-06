function createNinja(name, shuriken){
    
    this.name = name;
    this.shuriken = shuriken,
    this.shootShuriken = function(){
      if (this.shuriken > 0){
        this.shuriken -= 1
          console.log("Atirou. Shurikens restantes: " + this.shuriken)
      }else{
        console.log("As shurikens acabaram")
      }
    };   
}

let sasuke = new createNinja('Sasuke', 3);
sasuke.shootShuriken();
sasuke.shootShuriken();
sasuke.shootShuriken();
sasuke.shootShuriken();