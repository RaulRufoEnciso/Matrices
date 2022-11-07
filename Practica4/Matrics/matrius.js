let rows = document.querySelector("tbody").children
let matrix = []
for (var i = 0; i < rows.length; i++) {
    matrix.push(rows[i].children)
}
/*
matrix = 
[[1,2,3],
 [4,5,6],
 [7,8,9]];
 */

function erase() {
    for (let i= 0;i<matrix.length; ++i) { // afegir codi
        for (let j= 0;j<matrix[i].length; ++j) { // afegir codi
            matrix[i][j].style.backgroundColor = "white";
        }
    }
}

function paintAll() {
    erase();
    for (let i= 0;i<matrix.length; ++i) { // afegir codi
        for (let j= 0;j<matrix[i].length; ++j) { // afegir codi
            matrix[i][j].style.backgroundColor = "red";
        }
    }
}

function paintLeftHalf() {
    erase();
    for (let i= 0;i<matrix.length; ++i) { // afegir codi
        for (let j= 0;j<matrix[i].length/2; ++j) { // afegir codi
            matrix[i][j].style.backgroundColor = "red";
        }
    }
}

function paintRightHalf() {
    erase();
    for (let i = 0; i < matrix.length; i++) { // afegir codi
        for (let j = matrix[i].length-1; j > matrix[i].length/2; j--) { // afegir codi
            matrix[i][j].style.backgroundColor = "red";
        }
    }
}

function paintUpperHalf() {
    erase();
    for (let i = 0; i < matrix.length/2; ++i) { // afegir codi
        for (let j = 0; j < matrix[i].length; ++j) { // afegir codi
            matrix[i][j].style.backgroundColor = "red";
        }
    }

}

function paintLowerTriangle() {
    erase();
    for (let i = 0; i < matrix.length; ++i) { // afegir codi
        for (let j = 0; j < i; ++j) { // afegir codi
            matrix[i][j].style.backgroundColor = "red";
        }
    }

}

function paintUpperTriangle() {
    erase();
    for (let i = 0; i < matrix.length; ++i) { // afegir codi
        for (let j = i; j < matrix[i].length; ++j) { // afegir codi
            matrix[i][j].style.backgroundColor = "red";
        }
    }

}

function paintPerimeter() {
    erase();
    for (let i= 0;i<matrix.length; ++i) { // afegir codi
        for (let j= 0;j<matrix[i].length; ++j) { // afegir codi
            // afegir codi
            if (i == 0 || i == matrix.length-1){
                matrix[i][j].style.backgroundColor = "red";
            } else if (j == 0 || j == matrix[i].length-1){
                matrix[i][j].style.backgroundColor = "red";
            }

        }
    }
}

function paintCheckerboard() {
    erase();
    for (let i = 0; i < rows.length; i++) {
        var trList = rows[i].children;
        for (let j = 0; j < trList.length; j++) {
            if (j % 2 != 0 && i % 2 != 0) {
                matrix[i][j].style.backgroundColor = "red";
            }
            if (j % 2 == 0 && i % 2 == 0) {
                matrix[i][j].style.backgroundColor = "red";
            }
        }
    }
}

function paintCheckerboard2() {
    erase();
    for (let i = 0; i < rows.length; i++) {
        var trList = rows[i].children;
        for (let j = 0; j < trList.length; j++) {
            if (j % 2!= 0 && i % 2 == 0) {
                matrix[i][j].style.backgroundColor = "red";
            }
            if (j % 2 == 0 && i % 2 != 0) {
                matrix[i][j].style.backgroundColor = "red";
            }
        }
    }
}
