const container = document.querySelector('.container');
// Starting grid size
let size = 16;
pencilColor = 'black';

// Ask for user input


// Display the clear grid
function rowDiv(len) {
    const divMain = document.createElement('div');
    divMain.classList.add('mainDiv');

    for (let i = 0; i < len; i++) {
        const divRow = document.createElement('div');
        divRow.classList.add('row');
        divRow.style.backgroundColor = 'white';
        hover(divRow, pencilColor);
        divMain.appendChild(divRow);
    }
    container.appendChild(divMain);
}


function gridSize(size) {
    for (let i = 0; i < size; i++) {
        rowDiv(size);
    }
}


// Change background color of "hovered" square
function hover(square, color) {
    square.addEventListener('mouseenter', function (e) {
        square.classList.add('selected');
        square.style.backgroundColor = color;
    })
}


// Grid size buttons
const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => gridButtons(btn));

function gridButtons(btn) {
    btn.addEventListener('click', function (e) {
        clearGrid();
        gridSize(btn.classList[1]);
        gridBorder = 0;
    })
}

// Color buttons
const colors = document.querySelectorAll('.color');

colors.forEach(clr => colorButtons(clr));

function colorButtons(btn) {
    btn.addEventListener('click', function (e) {
        const squares = document.getElementsByClassName('row');
        for (let i = 0, n = squares.length; i < n; i++) {
            hover(squares[i], btn.classList[1]);
        }
    })
}


// Extra effects
const rainbow = document.querySelector('.rainbow');
rainbow.addEventListener('click', function (e) {
    const squares = document.getElementsByClassName('row');
    for (let i = 0, n = squares.length; i < n; i++) {
        hover(squares[i], getRandomColor());
    }
})


function getRandomColor() {
    const letters = '0123456789ABCDEF'.split('');
    let color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}


// Clear grid
const clear = document.querySelector('.clear-grid');
clear.addEventListener('click', function (e) {
    const squares = document.getElementsByClassName('row');
    for (let i = 0, n = squares.length; i < n; i++) {
        squares[i].style.backgroundColor = 'white';
    }
})

function clearGrid() {
    const divs = document.getElementsByClassName('mainDiv');
    while (divs.length > 0) {
        divs[0].parentNode.removeChild(divs[0]);
    }
}


// Show/hide grid (borders)
let gridBorder = 0;
const buttonGrid = document.querySelector('.hide-show-grid');

buttonGrid.addEventListener('click', function (e) {
    gridBorder++;
    const squares = document.getElementsByClassName('row');
    for (let i = 0, n = squares.length; i < n; i++) {
        if (gridBorder % 2 === 1) {
            squares[i].style.border = '0';
        } else {
            squares[i].style.border = '1px solid #d1d1d1';
        }
    }
})



gridSize(size);