const squares = Array.from(document.getElementsByClassName('gridsquare'));

squares.forEach(gridsquare => {
    gridsquare.addEventListener('mouseenter', function(e) {
        e.target.style.backgroundColor = "aqua";
        console.log(e);
    })
})

createGrid(20);


function createGrid(size) {
    for(let i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.className = 'row'; 
        for(let j = 0; j < size; j++) {
            let cell = document.createElement('div');
            cell.className = 'gridsquare';
            row.appendChild(cell);
        }
        document.getElementById('whatever').appendChild(row);
    }
    changeHeight(size);
}

function changeHeight(size) {
    let heightWidth = 960 / size;
    let changeRow = document.getElementsByClassName('row');
    for(let i = 0; i < changeRow.length; i++) {
        changeRow[i].style.height = heightWidth + 'px'; 
    }

    let changeCell = document.getElementsByClassName('gridsquare'); 
    for(let j = 0; j < changeCell.length; j++) {
        changeCell[j].style.height = heightWidth + 'px'; 
    }
}



