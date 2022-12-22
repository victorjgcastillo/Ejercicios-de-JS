//Basandote en el siguiente html, elimina todos los nodos que tengan la clase .fn-remove-me

const removeMeAll$$ = document.querySelectorAll('.fn-remove-me');

for (const removeMe$$ of removeMeAll$$) {
    removeMe$$.remove();
}