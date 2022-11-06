function createCar(model, year, color){
    return {
        model: model,
        year: year,
        color: color,
    }
}

let honda = createCar("Honda Fit", 2012, "black");

console.log(honda);