//Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const newUl$$ = document.createElement('ul')

for (let index = 0; index < countries.length; index++) {
    const eachCountry = countries[index];
    const newLi$$ = document.createElement('li')
    newLi$$.textContent = eachCountry
    newUl$$.appendChild(newLi$$)
}

document.body.appendChild(newUl$$)