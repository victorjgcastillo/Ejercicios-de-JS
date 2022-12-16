//Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, igual o mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.

const movies = [
    {name: "Your Name", durationInMinutes: 130},
    {name: "Pesadilla antes de navidad", durationInMinutes: 225}, 
    {name: "Origen", durationInMinutes: 165}, 
    {name: "El señor de los anillos", durationInMinutes: 967},
    {name: "Solo en casa", durationInMinutes: 214}, 
    {name: "El jardin de las palabras", durationInMinutes: 40}];

let smallMovie = []
let mediumMovie = []
let bigMovie = []
for (let index = 0; index < movies.length; index++) {
    const eachMovie = movies[index];
    if (eachMovie.durationInMinutes < 100) {
        smallMovie.push(eachMovie)
    } else if(eachMovie.durationInMinutes >= 100 || eachMovie.durationInMinutes < 200 ) {
        mediumMovie.push(eachMovie)
    }else {
        bigMovie.push(eachMovie)
    }
    
    
}

console.log(smallMovie)