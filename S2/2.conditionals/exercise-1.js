//Comprueba en cada uno de los usuarios que tenga almenos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruebalo con un console.log.


const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, 
    {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, 
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, 
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]
let ifApproved = 0
for (let index = 0; index < alumns.length; index++) {
    const eachAlumns = alumns[index];
    if (eachAlumns.T1 === true && eachAlumns.T2 === true || eachAlumns.T3 === true && eachAlumns.T2 === true || eachAlumns.T3 === true && eachAlumns.T1 === true){
        

        console.log(eachAlumns);
        
        
    }
    
}