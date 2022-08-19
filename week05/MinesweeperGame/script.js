// Set this variable to true to debug the placement of bombs without
// having to click on all cells to reveal them.
const CHEAT_REVEAL_ALL = false;

const ROWS_COUNT = 12;
const COLS_COUNT = 12;
const BOMBS_COUNT = 10;

var defeat = false;
var victory = false;

// Cell constructor
function Cell()
{
    this.discovered = false;
    this.isBomb = false;
    this.hasBeenFlagged = false;
}

// Initialize cells
var cells = Array(ROWS_COUNT);
for (var row = 0; row < ROWS_COUNT; row++) {
    cells[row] = Array(COLS_COUNT);
    for (var col = 0; col < COLS_COUNT; col++) {
        cells[row][col] = new Cell();
    }
}

// Bomb in random places
for(let i = 0; i < BOMBS_COUNT; i++) {
    var randomRow = Math.floor(Math.random()*11);
    var randomCol = Math.floor(Math.random()*11);
    cells[randomRow][randomCol].isBomb = true;
}

// Once the game has been initialized, we "render" it.
render();

//
// Function definitions
//

function discoverCell(row, col) {
        
    // Reveal cells when clicked.
    // Discover neighbor cells recursively, as long as there are no adjacent bombs to the current cell.
    if (row >= ROWS_COUNT || col >=COLS_COUNT || col < 0 || row < 0) {
        return;
    }

    if(cells[row][col].discovered) {
        return;
    }

    if(!defeat && !victory) {
        cells[row][col].discovered = true;
    }

    if(countAdjacentBombs(row,col) === 0) {
            discoverCell(row+1, col);
            discoverCell(row+1, col-1);
            discoverCell(row, col-1);
            discoverCell(row-1, col-1);
            discoverCell(row-1, col);
            discoverCell(row-1, col+1);
            discoverCell(row, col+1);
            discoverCell(row+1, col+1);  
    }
            

    if(cells[row][col].isBomb) {
        defeat = true;
    }

}

function flagCell(row, col) {
    // Implement flags. Flags allow the player to mark cells that they think contain a bomb. When clicking a cell and holding shift, function flagCell() will be called for you.

    if(cells[row][col].hasBeenFlagged === true) {
        cells[row][col].hasBeenFlagged = false;
    } else {
        cells[row][col].hasBeenFlagged = true;
    }

}

function isThereBomb(row, col) {
    if( row >= 0 && row < ROWS_COUNT && col >= 0 && col < COLS_COUNT) {
        return cells[row][col].isBomb; //true / false
    }
}

function countAdjacentBombs(row, col) {
    // TODO: Task 4 - Adjacent bombs are bombs in cells touching our cell (also diagonally). Count of adjacent cells with bombs in them.
            
    var neighborBombs = 0;


    if(isThereBomb(row+1, col)) {
        neighborBombs++;
    }
    if(isThereBomb(row+1, col-1)) {
        neighborBombs++;
    } 
    if(isThereBomb(row, col-1)) {
        neighborBombs++;
    }
    if(isThereBomb(row-1, col-1)) {
        neighborBombs++;
    }
    if(isThereBomb(row-1, col)) {
        neighborBombs++;
    } 
    if(isThereBomb(row-1, col+1)) {
        neighborBombs++;
    } 
    if(isThereBomb(row, col+1)) {
        neighborBombs++;
    }
    if(isThereBomb(row+1, col+1)) {
        neighborBombs++;
    }

    return neighborBombs;
}

function getBombsCount() {
    // Return the relevant values of display.
    return BOMBS_COUNT;
}

function getClearedCells() {
    // Return the relevant values of a counter.

    let numberOfCells = ROWS_COUNT * COLS_COUNT; //144
    let counter = 0;

            
        for( var row = 0; row < ROWS_COUNT; row++ ) {
            for( var col = 0; col < COLS_COUNT; col++ ) {

                if( cells[row][col].discovered ) {
                    counter++
                }

            }
        }
        return counter;
}

function getTotalCellsToClear() {
    let result = ROWS_COUNT * COLS_COUNT;
    return result;
}

function checkForVictory() {
    // Victory
    let numberOfCells = ROWS_COUNT * COLS_COUNT; //144
    let cellToClear = numberOfCells - BOMBS_COUNT;

    if(getClearedCells() === cellToClear) {
        victory = true;
    }
            
}

// Rendering functions
function getMessage() {
    if (victory == true) {
        return "Well done! 👏🏼<br><br>Refresh the page to start again.";
    } else if (defeat) {
        return "Boom! 💥<br><br>Refresh the page to try again.";
    }
    return "";
}

// "Render" the game. Update the content of the page to reflect any changes to the game state.
function render() {
    var playfield = document.getElementById("playfield");
    var html = "";
    for (var row = 0; row < ROWS_COUNT; row++) {
        html += '<div class="row">';
        for (var col = 0; col < COLS_COUNT; col++) {
            var cell = cells[row][col];
            var cellText = "";
            var cssClass = "";
            var textColor = "";
            if (cell.discovered || CHEAT_REVEAL_ALL || defeat) {
                cssClass = "discovered";
                if (cell.isBomb) {
                    cellText = "💣";
                } else {
                    var adjBombs = countAdjacentBombs(row, col);
                    if (adjBombs > 0) { 
                        cellText = adjBombs.toString();
                        if (adjBombs == 1) {
                            textColor = "blue";
                        } else if (adjBombs == 1) {
                            textColor = "green";
                        } else if (adjBombs == 1) {
                            textColor = "red";
                        } else if (adjBombs == 1) {
                            textColor = "gray";
                        }
                    }
                }
            } else {
                if (cell.hasBeenFlagged) {
                     cellText = "🚩"
                }
            }
            html += `<div class="cell ${cssClass}" style="color:${textColor}" onclick="onCellClicked(${row}, ${col}, event)">${cellText}</div>`;
        }
        html += "</div>"
    }
    playfield.innerHTML = html;

    // Defeat screen
    var body = document.getElementsByTagName("body")[0];
    if (defeat) {
        body.classList.add("defeat")
    }

    // Victory screen
    if (victory) {
        body.classList.add("victory")
    }

    // Update stats
    document.getElementById("bombs-count").innerText = getBombsCount().toString();
    document.getElementById("cleared-cells-count").innerText = getClearedCells().toString();
    document.getElementById("total-cells-to-clear").innerText = getTotalCellsToClear().toString();

    // Update message
    document.getElementById("message").innerHTML = getMessage();
}

// This function gets called each time a cell is clicked. Arguments "row" and "col" will be set tthe relevant
// values. Argument "event" is used to check if the shift key was held during the click.
function onCellClicked(row, col, event) {
    if(event.shiftKey) {
        flagCell(row, col);
    } else {
        discoverCell(row, col);
    }
    checkForVictory();
    render();
}