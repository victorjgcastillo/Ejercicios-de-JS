//Crea una arrow function que tenga dos parametros a y b y que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre por consola la suma de los dos parametros. 

const potato = (a = 10, b = 5) => {
    console.log(a + b)
}

potato(); // 15
potato(20); // 25
potato(50, 10); // 60

