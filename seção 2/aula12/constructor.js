function createTree(type, fruit){
    return{
      type: type,
      fruit: fruit,
    }
  }
  
  let laranjeira = createTree('Laranjeira', true);
  
  console.log(laranjeira);
  console.log(laranjeira.constructor);
  
  function hero(name, classs){
    this.name = name;
    this.classs = classs;
  }
  
  let jaspion = new hero('Jaspion', 'Warrior')
      
  console.log(jaspion);
  console.log(jaspion.constructor);