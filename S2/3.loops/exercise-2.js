//Usa un for in para imprimir por consola los datos del alienigena.

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (const key in alien) {
    if (alien.hasOwnProperty.call(alien, key)) {
        const element = alien[key];
        console.log(element);
    }
}
