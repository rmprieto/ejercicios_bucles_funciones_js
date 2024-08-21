const xMen = [
    { name: 'Wolverine', year: 1974 },
    { name: 'Cyclops', year: 1963 },
    { name: 'Storm', year: 1975 },
    { name: 'Phoenix', year: 1963 },
    { name: 'Beast', year: 1963 },
    { name: 'Gambit', year: 1990 },
    { name: 'Nightcrawler', year: 1975 },
    { name: 'Magneto', year: 1963 },
    { name: 'Professor X', year: 1963 },
    { name: 'Mystique', year: 1978 }
  ];
  
 const oldestsXmen=[];
 let oldestYear=2025;

function findOldestXMen(xMen) {
    // insert code
    for(let i = 0; i < xMen.length; i++){
        if (xMen[i].year < oldestYear){
            oldestYear=xMen[i].year;
        }
    }

    for(let i = 0; i < xMen.length; i++){
        if (xMen[i].year == oldestYear){
            oldestsXmen.push(xMen[i].name);
        }
    }

    return oldestsXmen;
}

console.log("Lista de los xMen mas antiguos");
console.log(findOldestXMen(xMen));
