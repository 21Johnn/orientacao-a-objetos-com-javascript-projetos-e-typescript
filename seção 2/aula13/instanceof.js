function createTree(type, fruit){
    return{
      type: type,
      fruit: fruit,
    }
  }
  
  let laranjeira = createTree('Laranjeira', true);
  
  
  function hero(name, classs){
    this.name = name;
    this.classs = classs;
  }
  
  let jaspion = new hero('Jaspion', 'Warrior')


  console.log(laranjeira instanceof createTree);
      
  