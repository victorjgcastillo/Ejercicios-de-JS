// Usa un for para remplazar todas las comidas que no sean veganas con las comidas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.

const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [
    {name: "Salad", isVegan: true},
    {name: "Salmon", isVegan: false}, 
    {name: "Tofu", isVegan: true}, 
    {name: "Burger", isVegan: false}, 
    {name: "Rice", isVegan: true}, 
    {name: "Pasta", isVegan: true}];

let miVariable = 0     

for (let index = 0; index < foodSchedule.length; index++) {
    const eachFruit = foodSchedule[index];
    if (eachFruit.isVegan === false) {
        eachFruit.name = fruits[miVariable]
        eachFruit.isVegan = true
        miVariable++
        
    }
    
    
}

console.log(foodSchedule)