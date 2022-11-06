let car = {
    portas: 4,
    aro: 20,
    tetoSolar: true,
    banco: 'couro',
  };
  
  
  let {portas, aro, tetoSolar, banco} = car
  
  console.log(portas);
  console.log(aro);
  console.log(tetoSolar);
  console.log(banco);

//   -------------------

let car = {
    portas: 4,
    aro: 20,
    tetoSolar: true,
    banco: 'couro',
  };
  
  let portas = 0;
  console.log(portas);
  ({portas} = car);
  console.log(portas);

// ---------------------------
let arr = [1,2,3,4,5,6,7,'asd,', 'sahu'];

let [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);
  