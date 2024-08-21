const actors = [
    { name: 'Leonardo DiCaprio', born: 1974 },
    { name: 'Tom Hanks', born: 1956 },
    { name: 'Meryl Streep', born: 1949 },
    { name: 'Brad Pitt', born: 1963 },
    { name: 'Johnny Depp', born: 1963 },
    { name: 'Scarlett Johansson', born: 1984 },
    { name: 'Jennifer Lawrence', born: 1990 },
    { name: 'Denzel Washington', born: 1954 },
    { name: 'Morgan Freeman', born: 1937 },
    { name: 'Cate Blanchett', born: 1969 }
  ];

const ageActors = [];
const actualYear = new Date().getFullYear();
  
function calculateActorsAges(actors) {
    // insert code
    for(i =0; i < actors.length; i++){
        const actor = actors[i];
        let actorAge = 0;
        actorAge = actualYear - actor.born;
        ageActors.push(actor.name,actorAge);
    }
    return ageActors;
}

console.log(calculateActorsAges(actors));
