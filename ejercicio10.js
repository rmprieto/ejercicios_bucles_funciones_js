const capitals = {
    Spain: 'Madrid',
    France: 'Paris',
    Italy: 'Rome',
    Germany: 'Berlin',
    Portugal: 'Lisbon',
    Poland: 'Warsaw',
    Greece: 'Athens',
    Austria: 'Vienna',
    Hungary: 'Budapest',
    Ireland: 'Dublin'
  };
  
  function getCapital(country) {
    // insert code
    if (capitals[country]){
      return "La capital de " + country + " es: " + capitals[country];
    } else {
      return "No conozco la capital de " + country;
    }

  }
console.log(getCapital("Poland"));
console.log(getCapital("Argentina"));
  
  