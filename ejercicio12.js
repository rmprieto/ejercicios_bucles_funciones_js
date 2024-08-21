const mutants = [
    { name: 'Wolverine', power: 'regeneration' },
    { name: 'Magneto', power: 'magnetism' },
    { name: 'Professor X', power: 'telepathy' },
    { name: 'Jean Grey', power: 'telekinesis' },
    { name: 'Rogue', power: 'power absorption' },
    { name: 'Storm', power: 'weather manipulation' },
    { name: 'Mystique', power: 'shape-shifting' },
    { name: 'Beast', power: 'superhuman strength' },
    { name: 'Colossus', power: 'steel skin' },
    { name: 'Nightcrawler', power: 'teleportation' }
  ];
  const mutantByPower = [];
  function findMutantByPower(mutants, power) {
    for (let i = 0; i < mutants.length; i++){
      const mutant = mutants[i];
      if (mutant.power === power){
        mutantByPower.push(mutant.name);
      }
    
    }
    if (mutantByPower.length > 0){
      return "Con el poder " + power + " he locacalizado los siguientes mutantes " + mutantByPower;
    } else { 
      return "No he localizado mutantes con el poder " + power; 
    }
  }
console.log(findMutantByPower(mutants, "regeneration"));
console.log(findMutantByPower(mutants, "aaaaaaa"));