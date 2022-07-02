let gridSize = 16;

addGrid();
createGrid(gridSize);
createBrush();

function createBrush() {
    const squares = Array.from(document.getElementsByClassName('gridsquare'));
    squares.forEach(gridsquare => {
        gridsquare.addEventListener('mouseenter', function(e) {
            e.target.style.backgroundColor = '#1F2937';
        })
    })
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.id == 'clear') {
            clearGrid();
        }
        else if(button.id == 'rainbow') {

        }
        else if(button.id == 'change-size') {
            changeSize();
        }
    })
})


function createGrid(size1) {
    for(let i = 0; i < size1; i++) {
        let row = document.createElement('div');
        row.className = 'row'; 
        for(let j = 0; j < size1; j++) {
            let cell = document.createElement('div');
            cell.className = 'gridsquare';
            row.appendChild(cell);
        }
        document.getElementById('whatever').appendChild(row);
    }
    changeHeight(size1);
    gridSize = size1; 
}

function changeHeight(size) {
    let heightWidth = 750 / size;
    let changeRow = document.getElementsByClassName('row');
    for(let i = 0; i < changeRow.length; i++) {
        changeRow[i].style.height = heightWidth + 'px'; 
    }

    let changeCell = document.getElementsByClassName('gridsquare'); 
    for(let j = 0; j < changeCell.length; j++) {
        changeCell[j].style.height = heightWidth + 'px'; 
        changeCell[j].style.width = heightWidth + 'px';
    }
}

function changeSize() {
    let size = prompt('Enter the size grid you would like: (Max 100)');
    let elem = document.getElementById('whatever');
    elem.remove();
    addGrid();
    createGrid(size);
    createBrush();
    gridSize = size;
}

function addGrid() {
    const addGrid = document.querySelector('.buttons-and-grid');
    const grid = document.createElement('div');
    grid.classList.add('grid-container');
    grid.setAttribute('id', 'whatever');
    addGrid.appendChild(grid);
}

function clearGrid() {
    let elem = document.getElementById('whatever');
    elem.remove();
    addGrid();
    createGrid(gridSize);
    createBrush();
}



