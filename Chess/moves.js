function knightPossibleMoves(piece, x_position, y_position) {
    var X = [2, 1, -1, -2, -2, -1, 1, 2];
    var Y = [1, 2, 2, 1, -1, -2, -2, -1];
    // console.log(x_position,y_position);
    let count = 0;
    var element = document.getElementById("chessboard");
    var row = element.getElementsByTagName("tr")[x_position - 1];
    var col = row.getElementsByTagName('td')[y_position - 1];
    col.classList.add("selected");
    for (let i = 0; i < 8; i++) {

        var x = +x_position + X[i];
        var y = +y_position + Y[i];
        // console.log(x,y);

        if (x >= 1 && y >= 1 && x <= 8 && y <= 8 && board[x][y] == '.') {
            console.log(x, y);
            var row = element.getElementsByTagName("tr")[x - 1];
            var col = row.getElementsByTagName('td')[y - 1];
            col.classList.add("possiblemove");

            count++;
        }
    }

    console.log(count);
}

function pawnPossibleMoves(piece, x_position, y_position) {
    console.log(x_position, y_position);

    let count = 0;
    var element = document.getElementById("chessboard");
    if ((piece == 'P') && (x_position == 7)) {
        for (let i = 1; i <= 2; i++) {
            var row = element.getElementsByTagName("tr")[x_position - i - 1];
            var col = row.getElementsByTagName("td")[y_position - 1];
            col.classList.add("possiblemove");
        }

    } else if ((piece == 'p') && (x_position == 2)) {
        x = +x_position;
        for (let i = 1; i <= 2; i++) {
            if (board[x + i][y_position] == '.') {
                var row = element.getElementsByTagName("tr")[x + i - 1];
                var col = row.getElementsByTagName("td")[y_position - 1];
                col.classList.add("possiblemove");
            }
        }

    } else if (piece == 'p' && x_position < 8) {
        x = +x_position;
        if (board[x + 1][y_position] == '.') {
            var row = element.getElementsByTagName("tr")[x_position];
            var col = row.getElementsByTagName("td")[y_position - 1];
            col.classList.add("possiblemove");
        }

    } else if (piece == 'P' && x_position > 1) {
        x = +x_position;
        if (board[x - 1][y_position] == '.') {
            var row = element.getElementsByTagName("tr")[x_position - 2];
            var col = row.getElementsByTagName("td")[y_position - 1];
            col.classList.add("possiblemove");
        }

    } else {
        console.log(false)
    }

}