function Ninja(name, weapon){
    this.name = name;
    this.weapon = weapon;
    this.shoot = function(){
        console.log("Atirou a " + this.weapon);
    };
}

let ninja1 = new Ninja('Naruto', 'Shurikens');
let ninja2 = new Ninja('Sasuke', 'kunai');

console.log(ninja1.name);