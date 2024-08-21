const movies = [
    { title: 'The Matrix', releaseYear: 1999 },
    { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
    { title: 'Inception', releaseYear: 2010 },
    { title: 'Jurassic Park', releaseYear: 1993 },
    { title: 'The Shawshank Redemption', releaseYear: 1994 },
    { title: 'Pulp Fiction', releaseYear: 1994 },
    { title: 'Avatar', releaseYear: 2009 },
    { title: 'The Dark Knight', releaseYear: 2008 },
    { title: 'Fight Club', releaseYear: 1999 },
    { title: 'Forrest Gump', releaseYear: 1994 }
];
  
// Añade tu código de bucle aquí
let sumAfter2000 = 0;
let sumBefore2000 = 0;

for (let i = 0; i < movies.length; i++){
    if (typeof(movies[i].releaseYear) === 'number') {
        if (movies[i].releaseYear < 2000) {
            ++sumBefore2000;
        } else if (movies[i].releaseYear > 2000) {
            ++sumAfter2000;
        }
    }
}

console.log("Total peliculas anteriores al 2000: ", sumBefore2000);
console.log("Total peliculas posteriores al 2000: ", sumAfter2000);
