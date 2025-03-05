const container = document.querySelector('.container');

function makeGrid(size) {
    container.innerHTML = '';
    const squareSize = 400 / size;
    for (let i = 0; i < size * size; i++ ) {
        const square = document.createElement('div');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.backgroundColor = 'black';

        square.addEventListener('mouseenter', function() {
            square.style.backgroundColor = 'red';
        });
        container.append(square);
    }
}

function createNewGrid() {
    const input = prompt('Enter number of squares per side (max 100):');
    const size = parseInt(input);

    if (isNaN(size) || size < 1 || size > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return; 
    }
    makeGrid(size);
}

makeGrid(16);

