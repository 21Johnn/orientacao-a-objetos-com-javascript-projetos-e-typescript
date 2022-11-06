let people = {
    name: "John",
    age: 29,
    birthday(){
        this.age +=1;
    },
    sayAge(){
      console.log("I'm " + this.age + " years old");
    },
    features: {
        eyes: "Blue",
        height: "1.89cm",
        nacionality: "Brazilian",
    },
}

people.greenCard = true;

console.log(people);