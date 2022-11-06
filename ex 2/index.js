// create an object called People whith a property Name, also create a method who show the name of people on console.

let people = {
    name: "John",
    showName() {
        console.log(this.name)
    }
}

people.showName();