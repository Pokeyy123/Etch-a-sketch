let color = "black";

function colorOfSquare() {
    if(color === "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100% , 50%)`
    }else {
        this.style.backgroundColor = color;
    }
}

function makeGrid(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for(let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorOfSquare);
        square.style.backgroundColor = 'white';
        board.insertAdjacentElement('beforeend', square);
    }
}

makeGrid(16);

function changeSize(input) {
    if(input >= 1 && input <= 100) {
        makeGrid(input);
    }else {
        console.log("Too many squares!");
    }
    
}

function changeColor(choice) {
    color = choice;
}

function reset() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = "white");
}