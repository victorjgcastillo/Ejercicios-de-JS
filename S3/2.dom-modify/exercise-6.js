//Basandote en el siguiente array crea una lista ul > li con los textos del array y metelo en el html.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const newUl$$ = document.createElement('ul')


for (let index = 0; index < apps.length; index++) {
	const app = apps[index];
	const newLi$$ = document.createElement('li');
	newLi$$.textContent = app;
	newUl$$.appendChild(newLi$$)
	
	
}

document.body.appendChild(newUl$$);