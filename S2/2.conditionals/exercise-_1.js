//Comprueba en cada uno de los usuarios que tenga almenos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruebalo con un console.log.


const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, 
    {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, 
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, 
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

for (let index = 0; index < alumns.length; index++) {
    const eachAlumn = alumns[index];
//    if(element.T1 === true && element.T2 === true || element.T3 === true){
//    console.log('alumno aprobado', element);
//    }

// otra manera

    let trimestreApproved = 0;
    trimestreApproved = eachAlumn.T1 ? trimestreApproved + 1 : trimestreApproved;
    trimestreApproved = eachAlumn.T2 ? trimestreApproved + 1 : trimestreApproved;
    trimestreApproved = eachAlumn.T3 ? trimestreApproved + 1 : trimestreApproved;

    eachAlumn.trimestreApproved =  trimestreApproved >= 2;

}
console.log(alumns);
