
for (let i = 0; i < 256; i++) {
    const container = document.querySelector('.container')
    const square = document.createElement('div')
    square.style.backgroundColor = 'black'
    square.style.height = '25px'
    square.style.width = '25px'

    square.addEventListener('mouseenter', function() {
        square.style.backgroundColor = 'red';
    });

    container.append(square)
}



