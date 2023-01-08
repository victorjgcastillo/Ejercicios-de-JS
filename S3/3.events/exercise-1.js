//Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click

function handleFocus(event){
    console.log(event.target.value);
}

const newButton$$ = document.createElement('button');
newButton$$.textContent = 'haz click'
newButton$$.className = 'btnToClick';
newButton$$.addEventListener('click', handleFocus )

document.body.appendChild(newButton$$)