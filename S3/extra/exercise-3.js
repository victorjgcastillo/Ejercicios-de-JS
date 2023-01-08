//Dado el siguiente html y javascript. Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const newDiv$$ = document.querySelector(`[data-function="printHere"]`)

const newUl$$ = document.createElement('ul')

for (let index = 0; index < cars.length; index++) {
    const car = cars[index];
    const newLi$$ = document.createElement('li')
    newLi$$.textContent = car
    newUl$$.appendChild(newLi$$)
    
}

newDiv$$.appendChild(newUl$$)