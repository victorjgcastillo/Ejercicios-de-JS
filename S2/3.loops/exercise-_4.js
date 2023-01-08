//Usa un bucle for of para recorrer todos los juguetes y elimina los que incluyan la palabra `gato`. Recuerda que puedes usar la función `.includes()` para comprobarlo.

const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}]


const funcionToys = (array) =>{
    let toysWithCat = [];
    for (const object of array){
        if (!object.name.includes('gato')) {
            toysWithCat.push(object)
        }
    }
    return toysWithCat;
}

const toysWithoutCat = funcionToys(toys)
console.log(toysWithoutCat);