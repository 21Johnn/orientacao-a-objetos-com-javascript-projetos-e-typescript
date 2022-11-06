function createNinja(name, shuriken){
    
    this.name = name;
    this.shuriken = shuriken,
    this.shootShuriken = function(enemy){
      if (this.shuriken > 0){
        this.shuriken -= 1;
        enemy.hp -=1;
        if (enemy.hp <= 0) {
        enemy.alive = false;
          console.log("matou " + enemy.name);
        }
        console.log("Atirou. Shurikens restantes: " + this.shuriken);
        
      }else{
        console.log("As shurikens acabaram")
      }
    };   
}

let sasuke = new createNinja('Sasuke', 3);

let enemy = {
    name: "Orochimaru",
    alive: true,
    hp: 2,
}

sasuke.shootShuriken(enemy);
sasuke.shootShuriken(enemy);
console.log(enemy);
