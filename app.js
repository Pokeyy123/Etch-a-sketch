const container = document.createElement('div')
container.classList.add('container');
document.body.appendChild(container);
container.style.color= "black";  
container.style.width = "272px";
container.style.height = "272px";
container.style.border = "1px solid";
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.alignContent = "flex-start";

for(i = 0; i < 256; i++) {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    container.appendChild(grid);
    grid.style.border = "1px solid grey" 
    grid.style.width = "15px";
    grid.style.height = "15px";
    grid.style.color = "yellow";

}


