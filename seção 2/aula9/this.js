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
    profile(){
        console.log("My name is " + this.name + " , i have " + this.age + " years old.")
    }
}

people.greenCard = true;
people.profile()


