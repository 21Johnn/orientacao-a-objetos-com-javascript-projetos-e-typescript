let people = {
    name: "John",
    age: 29,
    birthday(){
        this.age +=1;
    },
    sayAge(){
      console.log("I'm " + this.age + " years old");
    }
}

people.birthday()
console.log(people.age);
people.sayAge()