const container = document.createElement('div')
container.classList.add('container');
document.body.appendChild(container);
container.style.color= "black";  
container.style.width = "100px";
container.style.height = "100px";
container.style.border = "1px solid";


const grid = document.createElement('div');
grid.classList.add('grid');
grid.style.backgroundColor = "yellow"; 
grid.style.width = "16px";
grid.style.height = "16px";
grid.style.color = "yellow";


document.querySelector('.grid').appendChild(container);