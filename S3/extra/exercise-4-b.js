//Dado el siguiente array de objetos. Crea dinamicamente en el html una lista de div que contenga un elemento h4 para el titulo y otro elemento img para la imagen. 

const countries = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];

const principalDiv$$ = document.createElement('div')

for (let index = 0; index < countries.length; index++) {
    const country = countries[index];
    const moreDiv$$ = document.createElement('div')
    moreDiv$$.innerHTML = `<h4>${country.title}</h4><img src="${country.imgUrl}"/>`
    principalDiv$$.appendChild(moreDiv$$)

    const closeLastElement = () =>{
        const lastElement = document.querySelector('button');
        lastElement.style.display = country.pop()
    }
    
}

document.body.appendChild(principalDiv$$)

window.onload = () =>{
    document.querySelector('button').onclick = closeLastElement();
}
